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
 * @interface TransformImportKeyVersionIntoTokenizationTransformationRequest
 */
export interface TransformImportKeyVersionIntoTokenizationTransformationRequest {
    /**
     * The base64-encoded ciphertext of the keys. The AES key should be encrypted using OAEP with the wrapping key and then concatenated with the import key, wrapped by the AES key.
     * @type {string}
     * @memberof TransformImportKeyVersionIntoTokenizationTransformationRequest
     */
    ciphertext?: string;
    /**
     * The hash function used as a random oracle in the OAEP wrapping of the user-generated, ephemeral AES key. Can be one of "SHA1", "SHA224", "SHA256" (default), "SHA384", or "SHA512"
     * @type {string}
     * @memberof TransformImportKeyVersionIntoTokenizationTransformationRequest
     */
    hashFunction?: string;
}
/**
 * Check if a given object implements the TransformImportKeyVersionIntoTokenizationTransformationRequest interface.
 */
export declare function instanceOfTransformImportKeyVersionIntoTokenizationTransformationRequest(value: object): value is TransformImportKeyVersionIntoTokenizationTransformationRequest;
export declare function TransformImportKeyVersionIntoTokenizationTransformationRequestFromJSON(json: any): TransformImportKeyVersionIntoTokenizationTransformationRequest;
export declare function TransformImportKeyVersionIntoTokenizationTransformationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformImportKeyVersionIntoTokenizationTransformationRequest;
export declare function TransformImportKeyVersionIntoTokenizationTransformationRequestToJSON(json: any): TransformImportKeyVersionIntoTokenizationTransformationRequest;
export declare function TransformImportKeyVersionIntoTokenizationTransformationRequestToJSONTyped(value?: TransformImportKeyVersionIntoTokenizationTransformationRequest | null, ignoreDiscriminator?: boolean): any;
