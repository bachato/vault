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
 * @interface LeasesRevokeLeaseWithId2Request
 */
export interface LeasesRevokeLeaseWithId2Request {
    /**
     * The lease identifier to renew. This is included with a lease.
     * @type {string}
     * @memberof LeasesRevokeLeaseWithId2Request
     */
    leaseId?: string;
    /**
     * Whether or not to perform the revocation synchronously
     * @type {boolean}
     * @memberof LeasesRevokeLeaseWithId2Request
     */
    sync?: boolean;
}
/**
 * Check if a given object implements the LeasesRevokeLeaseWithId2Request interface.
 */
export declare function instanceOfLeasesRevokeLeaseWithId2Request(value: object): value is LeasesRevokeLeaseWithId2Request;
export declare function LeasesRevokeLeaseWithId2RequestFromJSON(json: any): LeasesRevokeLeaseWithId2Request;
export declare function LeasesRevokeLeaseWithId2RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeasesRevokeLeaseWithId2Request;
export declare function LeasesRevokeLeaseWithId2RequestToJSON(json: any): LeasesRevokeLeaseWithId2Request;
export declare function LeasesRevokeLeaseWithId2RequestToJSONTyped(value?: LeasesRevokeLeaseWithId2Request | null, ignoreDiscriminator?: boolean): any;
