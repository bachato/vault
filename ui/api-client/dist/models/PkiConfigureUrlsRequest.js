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
exports.instanceOfPkiConfigureUrlsRequest = instanceOfPkiConfigureUrlsRequest;
exports.PkiConfigureUrlsRequestFromJSON = PkiConfigureUrlsRequestFromJSON;
exports.PkiConfigureUrlsRequestFromJSONTyped = PkiConfigureUrlsRequestFromJSONTyped;
exports.PkiConfigureUrlsRequestToJSON = PkiConfigureUrlsRequestToJSON;
exports.PkiConfigureUrlsRequestToJSONTyped = PkiConfigureUrlsRequestToJSONTyped;
/**
 * Check if a given object implements the PkiConfigureUrlsRequest interface.
 */
function instanceOfPkiConfigureUrlsRequest(value) {
    return true;
}
function PkiConfigureUrlsRequestFromJSON(json) {
    return PkiConfigureUrlsRequestFromJSONTyped(json, false);
}
function PkiConfigureUrlsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'crlDistributionPoints': json['crl_distribution_points'] == null ? undefined : json['crl_distribution_points'],
        'deltaCrlDistributionPoints': json['delta_crl_distribution_points'] == null ? undefined : json['delta_crl_distribution_points'],
        'enableTemplating': json['enable_templating'] == null ? undefined : json['enable_templating'],
        'issuingCertificates': json['issuing_certificates'] == null ? undefined : json['issuing_certificates'],
        'ocspServers': json['ocsp_servers'] == null ? undefined : json['ocsp_servers'],
    };
}
function PkiConfigureUrlsRequestToJSON(json) {
    return PkiConfigureUrlsRequestToJSONTyped(json, false);
}
function PkiConfigureUrlsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crl_distribution_points': value['crlDistributionPoints'],
        'delta_crl_distribution_points': value['deltaCrlDistributionPoints'],
        'enable_templating': value['enableTemplating'],
        'issuing_certificates': value['issuingCertificates'],
        'ocsp_servers': value['ocspServers'],
    };
}
