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
 * Check if a given object implements the PkiRootSignSelfIssuedResponse interface.
 */
export function instanceOfPkiRootSignSelfIssuedResponse(value) {
    return true;
}
export function PkiRootSignSelfIssuedResponseFromJSON(json) {
    return PkiRootSignSelfIssuedResponseFromJSONTyped(json, false);
}
export function PkiRootSignSelfIssuedResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'issuingCa': json['issuing_ca'] == null ? undefined : json['issuing_ca'],
    };
}
export function PkiRootSignSelfIssuedResponseToJSON(json) {
    return PkiRootSignSelfIssuedResponseToJSONTyped(json, false);
}
export function PkiRootSignSelfIssuedResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'certificate': value['certificate'],
        'issuing_ca': value['issuingCa'],
    };
}
