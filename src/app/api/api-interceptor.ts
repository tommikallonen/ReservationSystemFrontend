import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { tap } from 'rxjs/operators';
import { ApiRequestConfiguration } from "../api-request-configuration";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private apiRequestConfiguration: ApiRequestConfiguration) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.apiRequestConfiguration.apply(req);
        // Apply the headers
        req = req.clone({
            setHeaders: {
                'ApiKey': 'SGFSAFGERHTESJHYSADSEFEAFSDF',
                //'Authorization': 'Basic ' + btoa('Testuser:Password')
            }
        });

        // Also handle errors globally
        return next.handle(req).pipe(
            tap((x: any) => x, (err: { status: any; }) => {
                // Handle this err
                console.error(`Error performing request, status code = ${err.status}`);
            })
        );
    }
}