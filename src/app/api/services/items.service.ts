/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Item } from '../models/item';
import { ItemDto } from '../models/item-dto';

@Injectable({
  providedIn: 'root',
})
export class ItemsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiItemsGet
   */
  static readonly ApiItemsGetPath = '/api/Items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Plain(params?: {
  }): Observable<Array<ItemDto>> {

    return this.apiItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Json(params?: {
  }): Observable<Array<ItemDto>> {

    return this.apiItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * Path part for operation apiItemsPost
   */
  static readonly ApiItemsPostPath = '/api/Items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Plain$Response(params?: {
    body?: ItemDto
  }): Observable<StrictHttpResponse<Item>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Item>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Plain(params?: {
    body?: ItemDto
  }): Observable<Item> {

    return this.apiItemsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Item>) => r.body as Item)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Json$Response(params?: {
    body?: ItemDto
  }): Observable<StrictHttpResponse<Item>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Item>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Json(params?: {
    body?: ItemDto
  }): Observable<Item> {

    return this.apiItemsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Item>) => r.body as Item)
    );
  }

  /**
   * Path part for operation apiItemsUserUsernameGet
   */
  static readonly ApiItemsUserUsernameGetPath = '/api/Items/user/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsUserUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsUserUsernameGet$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsUserUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsUserUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsUserUsernameGet$Plain(params: {
    username: string;
  }): Observable<Array<ItemDto>> {

    return this.apiItemsUserUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsUserUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsUserUsernameGet$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsUserUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsUserUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsUserUsernameGet$Json(params: {
    username: string;
  }): Observable<Array<ItemDto>> {

    return this.apiItemsUserUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * Path part for operation apiItemsQueryGet
   */
  static readonly ApiItemsQueryGetPath = '/api/Items/{query}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsQueryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Plain$Response(params: {
    query: string;
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsQueryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Plain(params: {
    query: string;
  }): Observable<Array<ItemDto>> {

    return this.apiItemsQueryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsQueryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Json$Response(params: {
    query: string;
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsQueryGetPath, 'get');
    if (params) {
      rb.path('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsQueryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Json(params: {
    query: string;
  }): Observable<Array<ItemDto>> {

    return this.apiItemsQueryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * Path part for operation apiItemsIdGet
   */
  static readonly ApiItemsIdGetPath = '/api/Items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Plain(params: {
    id: number;
  }): Observable<ItemDto> {

    return this.apiItemsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Json(params: {
    id: number;
  }): Observable<ItemDto> {

    return this.apiItemsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Path part for operation apiItemsIdPut
   */
  static readonly ApiItemsIdPutPath = '/api/Items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsIdPut$Response(params: {
    id: number;
    body?: ItemDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsIdPut(params: {
    id: number;
    body?: ItemDto
  }): Observable<void> {

    return this.apiItemsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiItemsIdDelete
   */
  static readonly ApiItemsIdDeletePath = '/api/Items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Item>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Item>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete$Plain(params: {
    id: number;
  }): Observable<Item> {

    return this.apiItemsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Item>) => r.body as Item)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Item>> {

    const rb = new RequestBuilder(this.rootUrl, ItemsService.ApiItemsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Item>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete$Json(params: {
    id: number;
  }): Observable<Item> {

    return this.apiItemsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Item>) => r.body as Item)
    );
  }

}
