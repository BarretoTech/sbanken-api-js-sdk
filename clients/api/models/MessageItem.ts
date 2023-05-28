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
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import type { Status } from './Status';
import {
    StatusFromJSON,
    StatusFromJSONTyped,
    StatusToJSON,
} from './Status';

/**
 * 
 * @export
 * @interface MessageItem
 */
export interface MessageItem {
    /**
     * 
     * @type {number}
     * @memberof MessageItem
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof MessageItem
     */
    subject?: string;
    /**
     * 
     * @type {Category}
     * @memberof MessageItem
     */
    category?: Category;
    /**
     * 
     * @type {string}
     * @memberof MessageItem
     */
    source?: string;
    /**
     * 
     * @type {Status}
     * @memberof MessageItem
     */
    status?: Status;
    /**
     * 
     * @type {number}
     * @memberof MessageItem
     */
    flag: number;
    /**
     * 
     * @type {Date}
     * @memberof MessageItem
     */
    receivedDate: Date;
    /**
     * 
     * @type {number}
     * @memberof MessageItem
     */
    attachmentId?: number;
    /**
     * 
     * @type {string}
     * @memberof MessageItem
     */
    linkName?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageItem
     */
    linkUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageItem
     */
    body?: string;
}

/**
 * Check if a given object implements the MessageItem interface.
 */
export function instanceOfMessageItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "flag" in value;
    isInstance = isInstance && "receivedDate" in value;

    return isInstance;
}

export function MessageItemFromJSON(json: any): MessageItem {
    return MessageItemFromJSONTyped(json, false);
}

export function MessageItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'category': !exists(json, 'category') ? undefined : CategoryFromJSON(json['category']),
        'source': !exists(json, 'source') ? undefined : json['source'],
        'status': !exists(json, 'status') ? undefined : StatusFromJSON(json['status']),
        'flag': json['flag'],
        'receivedDate': (new Date(json['receivedDate'])),
        'attachmentId': !exists(json, 'attachmentId') ? undefined : json['attachmentId'],
        'linkName': !exists(json, 'linkName') ? undefined : json['linkName'],
        'linkUrl': !exists(json, 'linkUrl') ? undefined : json['linkUrl'],
        'body': !exists(json, 'body') ? undefined : json['body'],
    };
}

export function MessageItemToJSON(value?: MessageItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'subject': value.subject,
        'category': CategoryToJSON(value.category),
        'source': value.source,
        'status': StatusToJSON(value.status),
        'flag': value.flag,
        'receivedDate': (value.receivedDate.toISOString()),
        'attachmentId': value.attachmentId,
        'linkName': value.linkName,
        'linkUrl': value.linkUrl,
        'body': value.body,
    };
}
