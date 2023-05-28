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


import * as runtime from '../runtime';
import type {
  ListResultOfPayment,
  Payment,
} from '../models';
import {
    ListResultOfPaymentFromJSON,
    ListResultOfPaymentToJSON,
    PaymentFromJSON,
    PaymentToJSON,
} from '../models';

export interface PaymentsListRequest {
    accountId: string | null;
    index?: number | null;
    length?: number | null;
}

export interface PaymentsReadRequest {
    accountId: string | null;
    paymentId: string | null;
}

/**
 * 
 */
export class PaymentsApi extends runtime.BaseAPI {

    /**
     * List the payments. These payments are awaiting processing. Payments are processed on the due date.
     */
    async paymentsListRaw(requestParameters: PaymentsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResultOfPayment>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling paymentsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.index !== undefined) {
            queryParameters['index'] = requestParameters.index;
        }

        if (requestParameters.length !== undefined) {
            queryParameters['length'] = requestParameters.length;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/Payments/{accountId}`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResultOfPaymentFromJSON(jsonValue));
    }

    /**
     * List the payments. These payments are awaiting processing. Payments are processed on the due date.
     */
    async paymentsList(requestParameters: PaymentsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResultOfPayment> {
        const response = await this.paymentsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Read a payment.
     */
    async paymentsReadRaw(requestParameters: PaymentsReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payment>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling paymentsRead.');
        }

        if (requestParameters.paymentId === null || requestParameters.paymentId === undefined) {
            throw new runtime.RequiredError('paymentId','Required parameter requestParameters.paymentId was null or undefined when calling paymentsRead.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v2/Payments/{accountId}/{paymentId}`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"paymentId"}}`, encodeURIComponent(String(requestParameters.paymentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentFromJSON(jsonValue));
    }

    /**
     * Read a payment.
     */
    async paymentsRead(requestParameters: PaymentsReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payment> {
        const response = await this.paymentsReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}