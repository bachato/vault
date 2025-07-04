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
 * @interface TransformWriteStoreRequest
 */
export interface TransformWriteStoreRequest {
    /**
     * For the `sql` store type, the templated connection string of the database.
     * @type {string}
     * @memberof TransformWriteStoreRequest
     */
    connectionString?: string;
    /**
     * For the `sql` store type, the database driver (database type) to use.
     * @type {string}
     * @memberof TransformWriteStoreRequest
     */
    driver?: string;
    /**
     * For the `sql` store type, the maximum duration a connection may remain open.
     * @type {number}
     * @memberof TransformWriteStoreRequest
     */
    maxConnectionLifetime?: number;
    /**
     * For the `sql` store type, the maximum number of idle connections allowed to the database, 0 for default.
     * @type {number}
     * @memberof TransformWriteStoreRequest
     */
    maxIdleConnections?: number;
    /**
     * For the `sql` store type, the maximum number of open connections allowed to the database, 0 for default.
     * @type {number}
     * @memberof TransformWriteStoreRequest
     */
    maxOpenConnections?: number;
    /**
     * For the `sql` store type, the password to use in populating the connection string.
     * @type {string}
     * @memberof TransformWriteStoreRequest
     */
    password?: string;
    /**
     * For the `sql` store type and databases which support multiple schemas, the schema in which to expect to find the storage tables.
     * @type {string}
     * @memberof TransformWriteStoreRequest
     */
    schema?: string;
    /**
     * Specifies a list of transformations this store supports. Currently only tokenization produces state needing storage.
     * @type {Array<string>}
     * @memberof TransformWriteStoreRequest
     */
    supportedTransformations?: Array<string>;
    /**
     * Specifies the type of the store.
     * @type {string}
     * @memberof TransformWriteStoreRequest
     */
    type?: string;
    /**
     * For the `sql` store type, the username to use in populating the connection string.
     * @type {string}
     * @memberof TransformWriteStoreRequest
     */
    username?: string;
}
/**
 * Check if a given object implements the TransformWriteStoreRequest interface.
 */
export declare function instanceOfTransformWriteStoreRequest(value: object): value is TransformWriteStoreRequest;
export declare function TransformWriteStoreRequestFromJSON(json: any): TransformWriteStoreRequest;
export declare function TransformWriteStoreRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformWriteStoreRequest;
export declare function TransformWriteStoreRequestToJSON(json: any): TransformWriteStoreRequest;
export declare function TransformWriteStoreRequestToJSONTyped(value?: TransformWriteStoreRequest | null, ignoreDiscriminator?: boolean): any;
