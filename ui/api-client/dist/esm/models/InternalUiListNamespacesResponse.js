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
 * Check if a given object implements the InternalUiListNamespacesResponse interface.
 */
export function instanceOfInternalUiListNamespacesResponse(value) {
    return true;
}
export function InternalUiListNamespacesResponseFromJSON(json) {
    return InternalUiListNamespacesResponseFromJSONTyped(json, false);
}
export function InternalUiListNamespacesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'keys': json['keys'] == null ? undefined : json['keys'],
    };
}
export function InternalUiListNamespacesResponseToJSON(json) {
    return InternalUiListNamespacesResponseToJSONTyped(json, false);
}
export function InternalUiListNamespacesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'keys': value['keys'],
    };
}
