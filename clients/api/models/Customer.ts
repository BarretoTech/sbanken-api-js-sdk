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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { PhoneNumber } from './PhoneNumber';
import {
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
} from './PhoneNumber';

/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    emailAddress?: string;
    /**
     * 
     * @type {Date}
     * @memberof Customer
     */
    dateOfBirth?: Date;
    /**
     * 
     * @type {Address}
     * @memberof Customer
     */
    postalAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof Customer
     */
    streetAddress?: Address;
    /**
     * 
     * @type {Array<PhoneNumber>}
     * @memberof Customer
     */
    phoneNumbers?: Array<PhoneNumber>;
}

/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'dateOfBirth': !exists(json, 'dateOfBirth') ? undefined : (new Date(json['dateOfBirth'])),
        'postalAddress': !exists(json, 'postalAddress') ? undefined : AddressFromJSON(json['postalAddress']),
        'streetAddress': !exists(json, 'streetAddress') ? undefined : AddressFromJSON(json['streetAddress']),
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : ((json['phoneNumbers'] as Array<any>).map(PhoneNumberFromJSON)),
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerId': value.customerId,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'emailAddress': value.emailAddress,
        'dateOfBirth': value.dateOfBirth === undefined ? undefined : (value.dateOfBirth.toISOString()),
        'postalAddress': AddressToJSON(value.postalAddress),
        'streetAddress': AddressToJSON(value.streetAddress),
        'phoneNumbers': value.phoneNumbers === undefined ? undefined : ((value.phoneNumbers as Array<any>).map(PhoneNumberToJSON)),
    };
}

