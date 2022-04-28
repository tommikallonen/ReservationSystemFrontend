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

import { Reservation } from '../models/reservation';
import { ReservationDto } from '../models/reservation-dto';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiReservationsGet
   */
  static readonly ApiReservationsGetPath = '/api/Reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ReservationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReservationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Plain(params?: {
  }): Observable<Array<ReservationDto>> {

    return this.apiReservationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReservationDto>>) => r.body as Array<ReservationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ReservationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReservationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Json(params?: {
  }): Observable<Array<ReservationDto>> {

    return this.apiReservationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReservationDto>>) => r.body as Array<ReservationDto>)
    );
  }

  /**
   * Path part for operation apiReservationsPost
   */
  static readonly ApiReservationsPostPath = '/api/Reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Plain$Response(params?: {
    body?: ReservationDto
  }): Observable<StrictHttpResponse<ReservationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReservationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Plain(params?: {
    body?: ReservationDto
  }): Observable<ReservationDto> {

    return this.apiReservationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReservationDto>) => r.body as ReservationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Json$Response(params?: {
    body?: ReservationDto
  }): Observable<StrictHttpResponse<ReservationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReservationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Json(params?: {
    body?: ReservationDto
  }): Observable<ReservationDto> {

    return this.apiReservationsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReservationDto>) => r.body as ReservationDto)
    );
  }

  /**
   * Path part for operation apiReservationsUserUsernameGet
   */
  static readonly ApiReservationsUserUsernameGetPath = '/api/Reservations/user/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsUserUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsUserUsernameGet$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<Array<ReservationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsUserUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReservationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsUserUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsUserUsernameGet$Plain(params: {
    username: string;
  }): Observable<Array<ReservationDto>> {

    return this.apiReservationsUserUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReservationDto>>) => r.body as Array<ReservationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsUserUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsUserUsernameGet$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<Array<ReservationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsUserUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReservationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsUserUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsUserUsernameGet$Json(params: {
    username: string;
  }): Observable<Array<ReservationDto>> {

    return this.apiReservationsUserUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReservationDto>>) => r.body as Array<ReservationDto>)
    );
  }

  /**
   * Path part for operation apiReservationsItemIdGet
   */
  static readonly ApiReservationsItemIdGetPath = '/api/Reservations/item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsItemIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsItemIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<ReservationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsItemIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReservationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsItemIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsItemIdGet$Plain(params: {
    id: number;
  }): Observable<Array<ReservationDto>> {

    return this.apiReservationsItemIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReservationDto>>) => r.body as Array<ReservationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsItemIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsItemIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Array<ReservationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsItemIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReservationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsItemIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsItemIdGet$Json(params: {
    id: number;
  }): Observable<Array<ReservationDto>> {

    return this.apiReservationsItemIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReservationDto>>) => r.body as Array<ReservationDto>)
    );
  }

  /**
   * Path part for operation apiReservationsIdGet
   */
  static readonly ApiReservationsIdGetPath = '/api/Reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ReservationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReservationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Plain(params: {
    id: number;
  }): Observable<ReservationDto> {

    return this.apiReservationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReservationDto>) => r.body as ReservationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ReservationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReservationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Json(params: {
    id: number;
  }): Observable<ReservationDto> {

    return this.apiReservationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReservationDto>) => r.body as ReservationDto)
    );
  }

  /**
   * Path part for operation apiReservationsIdPut
   */
  static readonly ApiReservationsIdPutPath = '/api/Reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsIdPut$Response(params: {
    id: number;
    body?: ReservationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiReservationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsIdPut(params: {
    id: number;
    body?: ReservationDto
  }): Observable<void> {

    return this.apiReservationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiReservationsIdDelete
   */
  static readonly ApiReservationsIdDeletePath = '/api/Reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Reservation>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Reservation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdDelete$Plain(params: {
    id: number;
  }): Observable<Reservation> {

    return this.apiReservationsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Reservation>) => r.body as Reservation)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Reservation>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationsService.ApiReservationsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Reservation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdDelete$Json(params: {
    id: number;
  }): Observable<Reservation> {

    return this.apiReservationsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Reservation>) => r.body as Reservation)
    );
  }

}
