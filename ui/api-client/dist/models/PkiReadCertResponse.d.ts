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
 * @interface PkiReadCertResponse
 */
export interface PkiReadCertResponse {
    /**
     * Issuing CA Chain
     * @type {string}
     * @memberof PkiReadCertResponse
     */
    caChain?: string;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiReadCertResponse
     */
    certificate?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCertResponse
     */
    issuerId?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiReadCertResponse
     */
    revocationTime?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCertResponse
     */
    revocationTimeRfc3339?: string;
}
/**
 * Check if a given object implements the PkiReadCertResponse interface.
 */
export declare function instanceOfPkiReadCertResponse(value: object): value is PkiReadCertResponse;
export declare function PkiReadCertResponseFromJSON(json: any): PkiReadCertResponse;
export declare function PkiReadCertResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCertResponse;
export declare function PkiReadCertResponseToJSON(json: any): PkiReadCertResponse;
export declare function PkiReadCertResponseToJSONTyped(value?: PkiReadCertResponse | null, ignoreDiscriminator?: boolean): any;
