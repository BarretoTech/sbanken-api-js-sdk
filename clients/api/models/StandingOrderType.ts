/* tslint:disable */
/* eslint-disable */
/**
 * SBanken
 * SBanken Beta API
 *
 * The version of the OpenAPI document: 2.0
 * Contact: rhuan@barreto.work
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum StandingOrderType {
    Payment = 'Payment',
    Transfer = 'Transfer',
    Other = 'Other'
}


export function StandingOrderTypeFromJSON(json: any): StandingOrderType {
    return StandingOrderTypeFromJSONTyped(json, false);
}

export function StandingOrderTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StandingOrderType {
    return json as StandingOrderType;
}

export function StandingOrderTypeToJSON(value?: StandingOrderType | null): any {
    return value as any;
}
