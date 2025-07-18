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
 * @interface RemountRequest
 */
export interface RemountRequest {
    /**
     * The previous mount point.
     * @type {string}
     * @memberof RemountRequest
     */
    from?: string;
    /**
     * The new mount point.
     * @type {string}
     * @memberof RemountRequest
     */
    to?: string;
}

/**
 * Check if a given object implements the RemountRequest interface.
 */
export function instanceOfRemountRequest(value: object): value is RemountRequest {
    return true;
}

export function RemountRequestFromJSON(json: any): RemountRequest {
    return RemountRequestFromJSONTyped(json, false);
}

export function RemountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemountRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'from': json['from'] == null ? undefined : json['from'],
        'to': json['to'] == null ? undefined : json['to'],
    };
}

export function RemountRequestToJSON(json: any): RemountRequest {
    return RemountRequestToJSONTyped(json, false);
}

export function RemountRequestToJSONTyped(value?: RemountRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'from': value['from'],
        'to': value['to'],
    };
}

