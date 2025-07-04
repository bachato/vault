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
 * @interface SystemWriteManagedKeysTypeNameTestSignRequest
 */
export interface SystemWriteManagedKeysTypeNameTestSignRequest {
    /**
     * The hashing algorithm to use when signing/verifying the random data.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameTestSignRequest
     */
    hashAlgorithm?: string;
    /**
     * For RSA backed managed keys attempt to sign with PSS
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameTestSignRequest
     */
    usePss?: boolean;
}
/**
 * Check if a given object implements the SystemWriteManagedKeysTypeNameTestSignRequest interface.
 */
export declare function instanceOfSystemWriteManagedKeysTypeNameTestSignRequest(value: object): value is SystemWriteManagedKeysTypeNameTestSignRequest;
export declare function SystemWriteManagedKeysTypeNameTestSignRequestFromJSON(json: any): SystemWriteManagedKeysTypeNameTestSignRequest;
export declare function SystemWriteManagedKeysTypeNameTestSignRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteManagedKeysTypeNameTestSignRequest;
export declare function SystemWriteManagedKeysTypeNameTestSignRequestToJSON(json: any): SystemWriteManagedKeysTypeNameTestSignRequest;
export declare function SystemWriteManagedKeysTypeNameTestSignRequestToJSONTyped(value?: SystemWriteManagedKeysTypeNameTestSignRequest | null, ignoreDiscriminator?: boolean): any;
