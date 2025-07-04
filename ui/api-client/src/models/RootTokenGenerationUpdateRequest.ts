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
 * @interface RootTokenGenerationUpdateRequest
 */
export interface RootTokenGenerationUpdateRequest {
    /**
     * Specifies a single unseal key share.
     * @type {string}
     * @memberof RootTokenGenerationUpdateRequest
     */
    key?: string;
    /**
     * Specifies the nonce of the attempt.
     * @type {string}
     * @memberof RootTokenGenerationUpdateRequest
     */
    nonce?: string;
}

/**
 * Check if a given object implements the RootTokenGenerationUpdateRequest interface.
 */
export function instanceOfRootTokenGenerationUpdateRequest(value: object): value is RootTokenGenerationUpdateRequest {
    return true;
}

export function RootTokenGenerationUpdateRequestFromJSON(json: any): RootTokenGenerationUpdateRequest {
    return RootTokenGenerationUpdateRequestFromJSONTyped(json, false);
}

export function RootTokenGenerationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootTokenGenerationUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'] == null ? undefined : json['key'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
    };
}

export function RootTokenGenerationUpdateRequestToJSON(json: any): RootTokenGenerationUpdateRequest {
    return RootTokenGenerationUpdateRequestToJSONTyped(json, false);
}

export function RootTokenGenerationUpdateRequestToJSONTyped(value?: RootTokenGenerationUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key': value['key'],
        'nonce': value['nonce'],
    };
}

