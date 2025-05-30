package pkcs7

import (
	"bytes"
	"crypto"
	"crypto/aes"
	"crypto/cipher"
	"crypto/des"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"crypto/x509/pkix"
	"encoding/asn1"
	"errors"
	"fmt"
)

// ErrUnsupportedAlgorithm tells you when our quick dev assumptions have failed
var ErrUnsupportedAlgorithm = errors.New("pkcs7: cannot decrypt data: only RSA, DES, DES-EDE3, AES-256-CBC and AES-128-GCM supported")

// ErrNotEncryptedContent is returned when attempting to Decrypt data that is not encrypted data
var ErrNotEncryptedContent = errors.New("pkcs7: content data is a decryptable data type")

// Decrypt decrypts encrypted content info for recipient cert and private key
func (p7 *PKCS7) Decrypt(cert *x509.Certificate, pkey crypto.PrivateKey) ([]byte, error) {
	data, ok := p7.raw.(envelopedData)
	if !ok {
		return nil, ErrNotEncryptedContent
	}
	recipient := selectRecipientForCertificate(data.RecipientInfos, cert)
	if recipient.EncryptedKey == nil {
		return nil, errors.New("pkcs7: no enveloped recipient for provided certificate")
	}
	switch pkey := pkey.(type) {
	case *rsa.PrivateKey:
		var contentKey []byte
		switch {
		case recipient.KeyEncryptionAlgorithm.Algorithm.Equal(OIDEncryptionAlgorithmRSAOAEP):
			oaepHash, err := parseRSAOaepParam(recipient.KeyEncryptionAlgorithm.Parameters)
			if err != nil {
				return nil, fmt.Errorf("failed to parse RSA OAEP parameter: %w", err)
			}
			contentKey, err = rsa.DecryptOAEP(oaepHash.New(), rand.Reader, pkey, recipient.EncryptedKey, []byte{})
			if err != nil {
				return nil, fmt.Errorf("failed OAEP decryption of content key: %w", err)
			}
		default:
			var err error
			contentKey, err = rsa.DecryptPKCS1v15(rand.Reader, pkey, recipient.EncryptedKey)
			if err != nil {
				return nil, fmt.Errorf("failed PKCS1v15 decryption of content key: %w", err)
			}
		}
		return data.EncryptedContentInfo.decrypt(contentKey)
	}
	return nil, ErrUnsupportedAlgorithm
}

// parseRSAOaepParam parses the RSA-OAEP parameters as defined in RFC 3447,
// at the moment we don't support the PSourceAlgorithm (label attribute)
func parseRSAOaepParam(parameters asn1.RawValue) (crypto.Hash, error) {
	if len(parameters.Bytes) == 0 {
		// Based on RFC 3447 Section A.2.1, if the parameter is absent, we assume SHA-1.
		return crypto.SHA1, nil
	}

	type rsaOAEPParams struct {
		HashAlgorithm    pkix.AlgorithmIdentifier `asn1:"tag:0,optional,explicit"`
		MaskGenAlgorithm pkix.AlgorithmIdentifier `asn1:"tag:1,optional,explicit"`
		PSourceAlgorithm pkix.AlgorithmIdentifier `asn1:"tag:2,optional,explicit"`
	}

	var params rsaOAEPParams
	_, err := asn1.Unmarshal(parameters.FullBytes, &params)
	if err != nil {
		return 0, errors.New("failed to parse RSA-OAEP parameters")
	}

	// Parse the hash algorithm
	hashOID := params.HashAlgorithm.Algorithm
	var hash crypto.Hash
	switch {
	case hashOID == nil:
		// If the hash algorithm is not specified, we assume SHA-1.
		hash = crypto.SHA1
	case hashOID.Equal(OIDDigestAlgorithmSHA1):
		hash = crypto.SHA1
	case hashOID.Equal(OIDDigestAlgorithmSHA256):
		hash = crypto.SHA256
	case hashOID.Equal(OIDDigestAlgorithmSHA384):
		hash = crypto.SHA384
	case hashOID.Equal(OIDDigestAlgorithmSHA512):
		hash = crypto.SHA512
	default:
		return 0, fmt.Errorf("unsupported hash algorithm in RSA-OAEP parameters: %s", hashOID)
	}

	return hash, nil
}

// DecryptUsingPSK decrypts encrypted data using caller provided
// pre-shared secret
func (p7 *PKCS7) DecryptUsingPSK(key []byte) ([]byte, error) {
	data, ok := p7.raw.(encryptedData)
	if !ok {
		return nil, ErrNotEncryptedContent
	}
	return data.EncryptedContentInfo.decrypt(key)
}

func (p7 *PKCS7) GetEncryptionAlgo() (int, error) {
	data, ok := p7.raw.(envelopedData)
	if !ok {
		return -1, ErrNotEncryptedContent
	}

	alg := data.EncryptedContentInfo.ContentEncryptionAlgorithm.Algorithm
	return encryptedAlgoOidToConstant(alg)
}

// convert the Encrypted Algorithm OID to our internal constants for Encryption Algorithms
func encryptedAlgoOidToConstant(alg asn1.ObjectIdentifier) (int, error) {
	switch {
	case alg.Equal(OIDEncryptionAlgorithmDESCBC):
		return EncryptionAlgorithmDESCBC, nil
	case alg.Equal(OIDEncryptionAlgorithmDESEDE3CBC):
		return EncryptionAlgorithmDESEDE3CBC, nil
	case alg.Equal(OIDEncryptionAlgorithmAES128CBC):
		return EncryptionAlgorithmAES128CBC, nil
	case alg.Equal(OIDEncryptionAlgorithmAES256CBC):
		return EncryptionAlgorithmAES256CBC, nil
	case alg.Equal(OIDEncryptionAlgorithmAES128GCM):
		return EncryptionAlgorithmAES128GCM, nil
	case alg.Equal(OIDEncryptionAlgorithmAES256GCM):
		return EncryptionAlgorithmAES256GCM, nil
	default:
		return -1, ErrUnsupportedAlgorithm
	}
}

func (eci encryptedContentInfo) decrypt(key []byte) ([]byte, error) {
	alg := eci.ContentEncryptionAlgorithm.Algorithm
	if _, err := encryptedAlgoOidToConstant(alg); err != nil {
		return nil, err
	}

	// EncryptedContent can either be constructed of multple OCTET STRINGs
	// or _be_ a tagged OCTET STRING
	var cyphertext []byte
	if eci.EncryptedContent.IsCompound {
		// Complex case to concat all of the children OCTET STRINGs
		var buf bytes.Buffer
		cypherbytes := eci.EncryptedContent.Bytes
		for {
			var part []byte
			cypherbytes, _ = asn1.Unmarshal(cypherbytes, &part)
			buf.Write(part)
			if cypherbytes == nil {
				break
			}
		}
		cyphertext = buf.Bytes()
	} else {
		// Simple case, the bytes _are_ the cyphertext
		cyphertext = eci.EncryptedContent.Bytes
	}

	var block cipher.Block
	var err error

	switch {
	case alg.Equal(OIDEncryptionAlgorithmDESCBC):
		block, err = des.NewCipher(key)
	case alg.Equal(OIDEncryptionAlgorithmDESEDE3CBC):
		block, err = des.NewTripleDESCipher(key)
	case alg.Equal(OIDEncryptionAlgorithmAES256CBC), alg.Equal(OIDEncryptionAlgorithmAES256GCM):
		fallthrough
	case alg.Equal(OIDEncryptionAlgorithmAES128GCM), alg.Equal(OIDEncryptionAlgorithmAES128CBC):
		block, err = aes.NewCipher(key)
	}

	if err != nil {
		return nil, err
	}

	if alg.Equal(OIDEncryptionAlgorithmAES128GCM) || alg.Equal(OIDEncryptionAlgorithmAES256GCM) {
		params := aesGCMParameters{}
		paramBytes := eci.ContentEncryptionAlgorithm.Parameters.Bytes

		_, err := asn1.Unmarshal(paramBytes, &params)
		if err != nil {
			return nil, err
		}

		gcm, err := cipher.NewGCM(block)
		if err != nil {
			return nil, err
		}

		if len(params.Nonce) != gcm.NonceSize() {
			return nil, errors.New("pkcs7: encryption algorithm parameters are incorrect")
		}
		if params.ICVLen != gcm.Overhead() {
			return nil, errors.New("pkcs7: encryption algorithm parameters are incorrect")
		}

		plaintext, err := gcm.Open(nil, params.Nonce, cyphertext, nil)
		if err != nil {
			return nil, err
		}

		return plaintext, nil
	}

	iv := eci.ContentEncryptionAlgorithm.Parameters.Bytes
	if len(iv) != block.BlockSize() {
		return nil, errors.New("pkcs7: encryption algorithm parameters are malformed")
	}
	mode := cipher.NewCBCDecrypter(block, iv)
	plaintext := make([]byte, len(cyphertext))
	mode.CryptBlocks(plaintext, cyphertext)
	if plaintext, err = unpad(plaintext, mode.BlockSize()); err != nil {
		return nil, err
	}
	return plaintext, nil
}

func unpad(data []byte, blocklen int) ([]byte, error) {
	if blocklen < 1 {
		return nil, fmt.Errorf("invalid blocklen %d", blocklen)
	}
	if len(data)%blocklen != 0 || len(data) == 0 {
		return nil, fmt.Errorf("invalid data len %d", len(data))
	}

	// the last byte is the length of padding
	padlen := int(data[len(data)-1])

	// check padding integrity, all bytes should be the same
	pad := data[len(data)-padlen:]
	for _, padbyte := range pad {
		if padbyte != byte(padlen) {
			return nil, errors.New("invalid padding")
		}
	}

	return data[:len(data)-padlen], nil
}

func selectRecipientForCertificate(recipients []recipientInfo, cert *x509.Certificate) recipientInfo {
	for _, recp := range recipients {
		if isCertMatchForIssuerAndSerial(cert, recp.IssuerAndSerialNumber) {
			return recp
		}
	}
	return recipientInfo{}
}
