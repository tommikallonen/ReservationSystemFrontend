import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/internal/operators/tap";
import { ApiRequestConfiguration } from "./api-request-configuration";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private apiRequestConfiguration: ApiRequestConfiguration) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Apply the headers
        req = this.apiRequestConfiguration.apply(req);
        req = req.clone({
            setHeaders: {
                'ApiKey': 'EIHYVAAPAIVAA'
            }
        });

        // Also handle errors globally
        return next.handle(req).pipe(
            tap(x => x, err => {
                // Handle this err
                console.error(`Error performing request, status code = ${err.status}`);
            })
        );
    }
}