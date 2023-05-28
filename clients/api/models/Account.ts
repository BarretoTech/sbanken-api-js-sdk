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
 * @interface Account
 */
export interface Account {
    /**
     * The account identifier for use with other APIs that require AccountID.
     * @type {string}
     * @memberof Account
     */
    accountId?: string;
    /**
     * The account's public account number
     * @type {string}
     * @memberof Account
     */
    accountNumber?: string;
    /**
     * The customerId of the person that owns the account, may be different from the queried customerId.
     * @type {string}
     * @memberof Account
     */
    ownerCustomerId?: string;
    /**
     * The name of the account. Not unique.
     * @type {string}
     * @memberof Account
     */
    name?: string;
    /**
     * The type of the account. Descriptive.
     * @type {string}
     * @memberof Account
     */
    accountType?: string;
    /**
     * The amount currently available on the account. This is the money available to spend. It will differ from the account balance, typically by credit limit and by pending transactions.
     * @type {number}
     * @memberof Account
     */
    available?: number;
    /**
     * The current account balance. This is the money owned.
     * @type {number}
     * @memberof Account
     */
    balance?: number;
    /**
     * The current credit limit on the account.
     * @type {number}
     * @memberof Account
     */
    creditLimit?: number;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'accountNumber': !exists(json, 'accountNumber') ? undefined : json['accountNumber'],
        'ownerCustomerId': !exists(json, 'ownerCustomerId') ? undefined : json['ownerCustomerId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'available': !exists(json, 'available') ? undefined : json['available'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'creditLimit': !exists(json, 'creditLimit') ? undefined : json['creditLimit'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'accountNumber': value.accountNumber,
        'ownerCustomerId': value.ownerCustomerId,
        'name': value.name,
        'accountType': value.accountType,
        'available': value.available,
        'balance': value.balance,
        'creditLimit': value.creditLimit,
    };
}
