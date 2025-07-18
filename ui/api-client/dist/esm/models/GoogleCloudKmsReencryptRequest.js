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
 * Check if a given object implements the GoogleCloudKmsReencryptRequest interface.
 */
export function instanceOfGoogleCloudKmsReencryptRequest(value) {
    return true;
}
export function GoogleCloudKmsReencryptRequestFromJSON(json) {
    return GoogleCloudKmsReencryptRequestFromJSONTyped(json, false);
}
export function GoogleCloudKmsReencryptRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'additionalAuthenticatedData': json['additional_authenticated_data'] == null ? undefined : json['additional_authenticated_data'],
        'ciphertext': json['ciphertext'] == null ? undefined : json['ciphertext'],
        'keyVersion': json['key_version'] == null ? undefined : json['key_version'],
    };
}
export function GoogleCloudKmsReencryptRequestToJSON(json) {
    return GoogleCloudKmsReencryptRequestToJSONTyped(json, false);
}
export function GoogleCloudKmsReencryptRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'additional_authenticated_data': value['additionalAuthenticatedData'],
        'ciphertext': value['ciphertext'],
        'key_version': value['keyVersion'],
    };
}
