import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

/**
 * Configuration for the performed HTTP requests
 */
@Injectable()
export class ApiRequestConfiguration {
    private authHeader: string;
    private authValue: string;

    /** Set to basic authentication */
    basic(user: string, password: string): void {
        this.authHeader = 'Authorization';
        this.authValue = 'Basic ' + btoa(user + ':' + password);
    }


    /** Clear any authentication headers (to be called after logout) */
    clear(): void {
        this.authHeader = "";
        this.authValue = "";
    }

    /** Apply the current authorization headers to the given request */
    apply(req: HttpRequest<any>): HttpRequest<any> {
        const headers: any = {};
        if (this.authHeader) {
            headers[this.authHeader] = this.authValue;
        }
        // Apply the headers to the request
        return req.clone({
            setHeaders: headers
        });
    }
}