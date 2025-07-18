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
exports.instanceOfPkiConfigureKeysResponse = instanceOfPkiConfigureKeysResponse;
exports.PkiConfigureKeysResponseFromJSON = PkiConfigureKeysResponseFromJSON;
exports.PkiConfigureKeysResponseFromJSONTyped = PkiConfigureKeysResponseFromJSONTyped;
exports.PkiConfigureKeysResponseToJSON = PkiConfigureKeysResponseToJSON;
exports.PkiConfigureKeysResponseToJSONTyped = PkiConfigureKeysResponseToJSONTyped;
/**
 * Check if a given object implements the PkiConfigureKeysResponse interface.
 */
function instanceOfPkiConfigureKeysResponse(value) {
    return true;
}
function PkiConfigureKeysResponseFromJSON(json) {
    return PkiConfigureKeysResponseFromJSONTyped(json, false);
}
function PkiConfigureKeysResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        '_default': json['default'] == null ? undefined : json['default'],
    };
}
function PkiConfigureKeysResponseToJSON(json) {
    return PkiConfigureKeysResponseToJSONTyped(json, false);
}
function PkiConfigureKeysResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'default': value['_default'],
    };
}
