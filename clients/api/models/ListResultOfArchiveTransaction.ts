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
import type { ArchiveTransaction } from './ArchiveTransaction';
import {
    ArchiveTransactionFromJSON,
    ArchiveTransactionFromJSONTyped,
    ArchiveTransactionToJSON,
} from './ArchiveTransaction';

/**
 * 
 * @export
 * @interface ListResultOfArchiveTransaction
 */
export interface ListResultOfArchiveTransaction {
    /**
     * 
     * @type {number}
     * @memberof ListResultOfArchiveTransaction
     */
    availableItems: number;
    /**
     * 
     * @type {Array<ArchiveTransaction>}
     * @memberof ListResultOfArchiveTransaction
     */
    items?: Array<ArchiveTransaction>;
}

/**
 * Check if a given object implements the ListResultOfArchiveTransaction interface.
 */
export function instanceOfListResultOfArchiveTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "availableItems" in value;

    return isInstance;
}

export function ListResultOfArchiveTransactionFromJSON(json: any): ListResultOfArchiveTransaction {
    return ListResultOfArchiveTransactionFromJSONTyped(json, false);
}

export function ListResultOfArchiveTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListResultOfArchiveTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableItems': json['availableItems'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ArchiveTransactionFromJSON)),
    };
}

export function ListResultOfArchiveTransactionToJSON(value?: ListResultOfArchiveTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableItems': value.availableItems,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ArchiveTransactionToJSON)),
    };
}

