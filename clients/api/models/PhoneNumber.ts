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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PhoneNumber
 */
export interface PhoneNumber {
    /**
     * 
     * @type {string}
     * @memberof PhoneNumber
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumber
     */
    number?: string;
}

/**
 * Check if a given object implements the PhoneNumber interface.
 */
export function instanceOfPhoneNumber(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PhoneNumberFromJSON(json: any): PhoneNumber {
    return PhoneNumberFromJSONTyped(json, false);
}

export function PhoneNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumber {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function PhoneNumberToJSON(value?: PhoneNumber | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countryCode': value.countryCode,
        'number': value.number,
    };
}

