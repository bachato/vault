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
 *
 * @export
 * @interface EntityLookUpRequest
 */
export interface EntityLookUpRequest {
    /**
     * ID of the alias.
     * @type {string}
     * @memberof EntityLookUpRequest
     */
    aliasId?: string;
    /**
     * Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with 'alias_name'.
     * @type {string}
     * @memberof EntityLookUpRequest
     */
    aliasMountAccessor?: string;
    /**
     * Name of the alias. This should be supplied in conjunction with 'alias_mount_accessor'.
     * @type {string}
     * @memberof EntityLookUpRequest
     */
    aliasName?: string;
    /**
     * ID of the entity.
     * @type {string}
     * @memberof EntityLookUpRequest
     */
    id?: string;
    /**
     * Name of the entity.
     * @type {string}
     * @memberof EntityLookUpRequest
     */
    name?: string;
}
/**
 * Check if a given object implements the EntityLookUpRequest interface.
 */
export declare function instanceOfEntityLookUpRequest(value: object): value is EntityLookUpRequest;
export declare function EntityLookUpRequestFromJSON(json: any): EntityLookUpRequest;
export declare function EntityLookUpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityLookUpRequest;
export declare function EntityLookUpRequestToJSON(json: any): EntityLookUpRequest;
export declare function EntityLookUpRequestToJSONTyped(value?: EntityLookUpRequest | null, ignoreDiscriminator?: boolean): any;
