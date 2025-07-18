"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfOidcWriteClientRequest = instanceOfOidcWriteClientRequest;
exports.OidcWriteClientRequestFromJSON = OidcWriteClientRequestFromJSON;
exports.OidcWriteClientRequestFromJSONTyped = OidcWriteClientRequestFromJSONTyped;
exports.OidcWriteClientRequestToJSON = OidcWriteClientRequestToJSON;
exports.OidcWriteClientRequestToJSONTyped = OidcWriteClientRequestToJSONTyped;
/**
 * Check if a given object implements the OidcWriteClientRequest interface.
 */
function instanceOfOidcWriteClientRequest(value) {
    return true;
}
function OidcWriteClientRequestFromJSON(json) {
    return OidcWriteClientRequestFromJSONTyped(json, false);
}
function OidcWriteClientRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accessTokenTtl': json['access_token_ttl'] == null ? undefined : json['access_token_ttl'],
        'assignments': json['assignments'] == null ? undefined : json['assignments'],
        'clientType': json['client_type'] == null ? undefined : json['client_type'],
        'idTokenTtl': json['id_token_ttl'] == null ? undefined : json['id_token_ttl'],
        'key': json['key'] == null ? undefined : json['key'],
        'redirectUris': json['redirect_uris'] == null ? undefined : json['redirect_uris'],
    };
}
function OidcWriteClientRequestToJSON(json) {
    return OidcWriteClientRequestToJSONTyped(json, false);
}
function OidcWriteClientRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'access_token_ttl': value['accessTokenTtl'],
        'assignments': value['assignments'],
        'client_type': value['clientType'],
        'id_token_ttl': value['idTokenTtl'],
        'key': value['key'],
        'redirect_uris': value['redirectUris'],
    };
}
