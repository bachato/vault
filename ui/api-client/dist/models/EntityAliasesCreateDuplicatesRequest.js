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
exports.instanceOfEntityAliasesCreateDuplicatesRequest = instanceOfEntityAliasesCreateDuplicatesRequest;
exports.EntityAliasesCreateDuplicatesRequestFromJSON = EntityAliasesCreateDuplicatesRequestFromJSON;
exports.EntityAliasesCreateDuplicatesRequestFromJSONTyped = EntityAliasesCreateDuplicatesRequestFromJSONTyped;
exports.EntityAliasesCreateDuplicatesRequestToJSON = EntityAliasesCreateDuplicatesRequestToJSON;
exports.EntityAliasesCreateDuplicatesRequestToJSONTyped = EntityAliasesCreateDuplicatesRequestToJSONTyped;
/**
 * Check if a given object implements the EntityAliasesCreateDuplicatesRequest interface.
 */
function instanceOfEntityAliasesCreateDuplicatesRequest(value) {
    return true;
}
function EntityAliasesCreateDuplicatesRequestFromJSON(json) {
    return EntityAliasesCreateDuplicatesRequestFromJSONTyped(json, false);
}
function EntityAliasesCreateDuplicatesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'count': json['count'] == null ? undefined : json['count'],
        'differentCase': json['different_case'] == null ? undefined : json['different_case'],
        'local': json['local'] == null ? undefined : json['local'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'mountAccessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'name': json['name'] == null ? undefined : json['name'],
        'namespaceId': json['namespace_id'] == null ? undefined : json['namespace_id'],
    };
}
function EntityAliasesCreateDuplicatesRequestToJSON(json) {
    return EntityAliasesCreateDuplicatesRequestToJSONTyped(json, false);
}
function EntityAliasesCreateDuplicatesRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'count': value['count'],
        'different_case': value['differentCase'],
        'local': value['local'],
        'metadata': value['metadata'],
        'mount_accessor': value['mountAccessor'],
        'name': value['name'],
        'namespace_id': value['namespaceId'],
    };
}
