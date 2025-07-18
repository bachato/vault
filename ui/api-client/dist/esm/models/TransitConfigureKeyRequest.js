/* tslint:disable */
/* eslint-disable */
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
 * Check if a given object implements the TransitConfigureKeyRequest interface.
 */
export function instanceOfTransitConfigureKeyRequest(value) {
    return true;
}
export function TransitConfigureKeyRequestFromJSON(json) {
    return TransitConfigureKeyRequestFromJSONTyped(json, false);
}
export function TransitConfigureKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowPlaintextBackup': json['allow_plaintext_backup'] == null ? undefined : json['allow_plaintext_backup'],
        'autoRotatePeriod': json['auto_rotate_period'] == null ? undefined : json['auto_rotate_period'],
        'deletionAllowed': json['deletion_allowed'] == null ? undefined : json['deletion_allowed'],
        'exportable': json['exportable'] == null ? undefined : json['exportable'],
        'minDecryptionVersion': json['min_decryption_version'] == null ? undefined : json['min_decryption_version'],
        'minEncryptionVersion': json['min_encryption_version'] == null ? undefined : json['min_encryption_version'],
    };
}
export function TransitConfigureKeyRequestToJSON(json) {
    return TransitConfigureKeyRequestToJSONTyped(json, false);
}
export function TransitConfigureKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'allow_plaintext_backup': value['allowPlaintextBackup'],
        'auto_rotate_period': value['autoRotatePeriod'],
        'deletion_allowed': value['deletionAllowed'],
        'exportable': value['exportable'],
        'min_decryption_version': value['minDecryptionVersion'],
        'min_encryption_version': value['minEncryptionVersion'],
    };
}
