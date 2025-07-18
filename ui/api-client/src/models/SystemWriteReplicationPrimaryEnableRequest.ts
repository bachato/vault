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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SystemWriteReplicationPrimaryEnableRequest
 */
export interface SystemWriteReplicationPrimaryEnableRequest {
    /**
     * The address the secondary cluster should connect to. Defaults to the primary's cluster address.
     * @type {string}
     * @memberof SystemWriteReplicationPrimaryEnableRequest
     */
    primaryClusterAddr?: string;
}

/**
 * Check if a given object implements the SystemWriteReplicationPrimaryEnableRequest interface.
 */
export function instanceOfSystemWriteReplicationPrimaryEnableRequest(value: object): value is SystemWriteReplicationPrimaryEnableRequest {
    return true;
}

export function SystemWriteReplicationPrimaryEnableRequestFromJSON(json: any): SystemWriteReplicationPrimaryEnableRequest {
    return SystemWriteReplicationPrimaryEnableRequestFromJSONTyped(json, false);
}

export function SystemWriteReplicationPrimaryEnableRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPrimaryEnableRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'primaryClusterAddr': json['primary_cluster_addr'] == null ? undefined : json['primary_cluster_addr'],
    };
}

export function SystemWriteReplicationPrimaryEnableRequestToJSON(json: any): SystemWriteReplicationPrimaryEnableRequest {
    return SystemWriteReplicationPrimaryEnableRequestToJSONTyped(json, false);
}

export function SystemWriteReplicationPrimaryEnableRequestToJSONTyped(value?: SystemWriteReplicationPrimaryEnableRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'primary_cluster_addr': value['primaryClusterAddr'],
    };
}

