import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, timeInterval } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add authorization header with JWT token if available.
        let accessToken = JSON.parse(sessionStorage.getItem('accessToken'));
        if (accessToken && accessToken.id_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken.id_token}`
                }
            });
        }
        // Next, hit's this block for every HTTP request. So that we can catch the error here only.
        return next.handle(request).pipe(
            // Retry the failed request for 1 more time.
            retry(1),
            catchError((error: HttpErrorResponse) => {
                // this.dialog.open(ErrordialogComponent, { data: error });
                return throwError(error);
            })
        )
    }
}