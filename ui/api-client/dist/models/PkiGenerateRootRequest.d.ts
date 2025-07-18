/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PkiGenerateRootRequest
 */
export interface PkiGenerateRootRequest {
    /**
     * The requested Subject Alternative Names, if any, in a comma-delimited list. May contain both DNS names and email addresses.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    altNames?: string;
    /**
     * The requested common name; if you want more than one, specify the alternative names in the alt_names map. If not specified when signing, the common name will be taken from the CSR; other names must still be specified in alt_names or ip_sans.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    commonName?: string;
    /**
     * If set, Country will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    country?: Array<string>;
    /**
     * If true, the Common Name will not be included in DNS or Email Subject Alternate Names. Defaults to false (CN is included).
     * @type {boolean}
     * @memberof PkiGenerateRootRequest
     */
    excludeCnFromSans?: boolean;
    /**
     * Domains for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    excludedDnsDomains?: Array<string>;
    /**
     * Email addresses for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    excludedEmailAddresses?: Array<string>;
    /**
     * IP ranges for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10). Ranges must be specified in the notation of IP address and prefix length, like "192.0.2.0/24" or "2001:db8::/32", as defined in RFC 4632 and RFC 4291.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    excludedIpRanges?: Array<string>;
    /**
     * URI domains for which this certificate is not allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    excludedUriDomains?: Array<string>;
    /**
     * Format for returned data. Can be "pem", "der", or "pem_bundle". If "pem_bundle", any private key and issuing cert will be appended to the certificate pem. If "der", the value will be base64 encoded. Defaults to "pem".
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    format?: PkiGenerateRootRequestFormatEnum;
    /**
     * The requested IP SANs, if any, in a comma-delimited list
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    ipSans?: Array<string>;
    /**
     * Provide a name to the generated or existing issuer, the name must be unique across all issuers and not be the reserved value 'default'
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    issuerName?: string;
    /**
     * The number of bits to use. Allowed values are 0 (universal default); with rsa key_type: 2048 (default), 3072, 4096 or 8192; with ec key_type: 224, 256 (default), 384, or 521; ignored with ed25519.
     * @type {number}
     * @memberof PkiGenerateRootRequest
     */
    keyBits?: number;
    /**
     * Provide a name to the generated or existing key, the name must be unique across all keys and not be the reserved value 'default'
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    keyName?: string;
    /**
     * Reference to a existing key; either "default" for the configured default key, an identifier or the name assigned to the key.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    keyRef?: string;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    keyType?: PkiGenerateRootRequestKeyTypeEnum;
    /**
     * This list of key usages (not extended key usages) will be added to the existing set of key usages, CRL,CertSign, on the generated certificate. Valid values can be found at https://golang.org/pkg/crypto/x509/#KeyUsage -- simply drop the "KeyUsage" part of the name. To use the issuer for CMPv2, DigitalSignature must be set.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    keyUsage?: Array<string>;
    /**
     * If set, Locality will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    locality?: Array<string>;
    /**
     * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_name is required. Ignored for other types.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    managedKeyId?: string;
    /**
     * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_id is required. Ignored for other types.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    managedKeyName?: string;
    /**
     * The maximum allowable path length
     * @type {number}
     * @memberof PkiGenerateRootRequest
     */
    maxPathLength?: number;
    /**
     * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    notAfter?: string;
    /**
     * The duration before now which the certificate needs to be backdated by.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    notBeforeDuration?: string;
    /**
     * If set, O (Organization) will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    organization?: Array<string>;
    /**
     * Requested other SANs, in an array with the format <oid>;UTF8:<utf8 string value> for each entry.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    otherSans?: Array<string>;
    /**
     * If set, OU (OrganizationalUnit) will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    ou?: Array<string>;
    /**
     * Domains for which this certificate is allowed to sign or issue child certificates. If set, all DNS names (subject and alt) on child certs must be exact matches or subsets of the given domains (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    permittedDnsDomains?: Array<string>;
    /**
     * Email addresses for which this certificate is allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    permittedEmailAddresses?: Array<string>;
    /**
     * IP ranges for which this certificate is allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10). Ranges must be specified in the notation of IP address and prefix length, like "192.0.2.0/24" or "2001:db8::/32", as defined in RFC 4632 and RFC 4291.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    permittedIpRanges?: Array<string>;
    /**
     * URI domains for which this certificate is allowed to sign or issue child certificates (see https://tools.ietf.org/html/rfc5280#section-4.2.1.10).
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    permittedUriDomains?: Array<string>;
    /**
     * If set, Postal Code will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    postalCode?: Array<string>;
    /**
     * Format for the returned private key. Generally the default will be controlled by the "format" parameter as either base64-encoded DER or PEM-encoded DER. However, this can be set to "pkcs8" to have the returned private key contain base64-encoded pkcs8 or PEM-encoded pkcs8 instead. Defaults to "der".
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    privateKeyFormat?: PkiGenerateRootRequestPrivateKeyFormatEnum;
    /**
     * If set, Province will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    province?: Array<string>;
    /**
     * The Subject's requested serial number, if any. See RFC 4519 Section 2.31 'serialNumber' for a description of this field. If you want more than one, specify alternative names in the alt_names map using OID 2.5.4.5. This has no impact on the final certificate's Serial Number field.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    serialNumber?: string;
    /**
     * The number of bits to use in the signature algorithm; accepts 256 for SHA-2-256, 384 for SHA-2-384, and 512 for SHA-2-512. Defaults to 0 to automatically detect based on key length (SHA-2-256 for RSA keys, and matching the curve size for NIST P-Curves).
     * @type {number}
     * @memberof PkiGenerateRootRequest
     */
    signatureBits?: number;
    /**
     * If set, Street Address will be set to this value.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    streetAddress?: Array<string>;
    /**
     * The requested Time To Live for the certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be larger than the mount max TTL. Note: this only has an effect when generating a CA cert or signing a CA cert, not when generating a CSR for an intermediate CA.
     * @type {string}
     * @memberof PkiGenerateRootRequest
     */
    ttl?: string;
    /**
     * The requested URI SANs, if any, in a comma-delimited list.
     * @type {Array<string>}
     * @memberof PkiGenerateRootRequest
     */
    uriSans?: Array<string>;
    /**
     * Whether or not to use PSS signatures when using a RSA key-type issuer. Defaults to false.
     * @type {boolean}
     * @memberof PkiGenerateRootRequest
     */
    usePss?: boolean;
}
/**
* @export
* @enum {string}
*/
export declare enum PkiGenerateRootRequestFormatEnum {
    PEM = "pem",
    DER = "der",
    PEM_BUNDLE = "pem_bundle"
}
/**
* @export
* @enum {string}
*/
export declare enum PkiGenerateRootRequestKeyTypeEnum {
    RSA = "rsa",
    EC = "ec",
    ED25519 = "ed25519"
}
/**
* @export
* @enum {string}
*/
export declare enum PkiGenerateRootRequestPrivateKeyFormatEnum {
    EMPTY = "",
    DER = "der",
    PEM = "pem",
    PKCS8 = "pkcs8"
}
/**
 * Check if a given object implements the PkiGenerateRootRequest interface.
 */
export declare function instanceOfPkiGenerateRootRequest(value: object): value is PkiGenerateRootRequest;
export declare function PkiGenerateRootRequestFromJSON(json: any): PkiGenerateRootRequest;
export declare function PkiGenerateRootRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiGenerateRootRequest;
export declare function PkiGenerateRootRequestToJSON(json: any): PkiGenerateRootRequest;
export declare function PkiGenerateRootRequestToJSONTyped(value?: PkiGenerateRootRequest | null, ignoreDiscriminator?: boolean): any;
