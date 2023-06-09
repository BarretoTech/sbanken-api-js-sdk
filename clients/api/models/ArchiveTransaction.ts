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
import type { CardDetails } from './CardDetails';
import {
    CardDetailsFromJSON,
    CardDetailsFromJSONTyped,
    CardDetailsToJSON,
} from './CardDetails';
import type { SourceType } from './SourceType';
import {
    SourceTypeFromJSON,
    SourceTypeFromJSONTyped,
    SourceTypeToJSON,
} from './SourceType';

/**
 * 
 * @export
 * @interface ArchiveTransaction
 */
export interface ArchiveTransaction {
    /**
     * 
     * @type {string}
     * @memberof ArchiveTransaction
     */
    transactionId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ArchiveTransaction
     */
    accountingDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof ArchiveTransaction
     */
    interestDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof ArchiveTransaction
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ArchiveTransaction
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof ArchiveTransaction
     */
    transactionType?: string;
    /**
     * 
     * @type {number}
     * @memberof ArchiveTransaction
     */
    transactionTypeCode: number;
    /**
     * 
     * @type {string}
     * @memberof ArchiveTransaction
     */
    transactionTypeText?: string;
    /**
     * 
     * @type {SourceType}
     * @memberof ArchiveTransaction
     */
    source: SourceType;
    /**
     * 
     * @type {CardDetails}
     * @memberof ArchiveTransaction
     */
    cardDetails?: CardDetails;
    /**
     * 
     * @type {boolean}
     * @memberof ArchiveTransaction
     */
    cardDetailsSpecified: boolean;
}

/**
 * Check if a given object implements the ArchiveTransaction interface.
 */
export function instanceOfArchiveTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountingDate" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "transactionTypeCode" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "cardDetailsSpecified" in value;

    return isInstance;
}

export function ArchiveTransactionFromJSON(json: any): ArchiveTransaction {
    return ArchiveTransactionFromJSONTyped(json, false);
}

export function ArchiveTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArchiveTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'accountingDate': (new Date(json['accountingDate'])),
        'interestDate': !exists(json, 'interestDate') ? undefined : (new Date(json['interestDate'])),
        'amount': json['amount'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'transactionType': !exists(json, 'transactionType') ? undefined : json['transactionType'],
        'transactionTypeCode': json['transactionTypeCode'],
        'transactionTypeText': !exists(json, 'transactionTypeText') ? undefined : json['transactionTypeText'],
        'source': SourceTypeFromJSON(json['source']),
        'cardDetails': !exists(json, 'cardDetails') ? undefined : CardDetailsFromJSON(json['cardDetails']),
        'cardDetailsSpecified': json['cardDetailsSpecified'],
    };
}

export function ArchiveTransactionToJSON(value?: ArchiveTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionId': value.transactionId,
        'accountingDate': (value.accountingDate.toISOString()),
        'interestDate': value.interestDate === undefined ? undefined : (value.interestDate.toISOString()),
        'amount': value.amount,
        'text': value.text,
        'transactionType': value.transactionType,
        'transactionTypeCode': value.transactionTypeCode,
        'transactionTypeText': value.transactionTypeText,
        'source': SourceTypeToJSON(value.source),
        'cardDetails': CardDetailsToJSON(value.cardDetails),
        'cardDetailsSpecified': value.cardDetailsSpecified,
    };
}

