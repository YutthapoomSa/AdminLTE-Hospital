import {LocalService} from '../local.service';
import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private localService: LocalService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.localService.getToken();

        if (!!token && !!token) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
            });
        } else {
            if (request.headers.get('Content-Type') === 'multipart/form-data') {
                request = request.clone({
                    headers: request.headers.delete('Content-Type')
                });
            }
        }

        if (!request.headers.has('Accept')) {
            request = request.clone({
                headers: request.headers.set('Accept', 'application/json')
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log('event -> InterceptorInterceptor -> err', error);
                switch (error.status) {
                    case 401:
                        console.error('------ 401');
                        localStorage.clear(); //  clear localStore all
                        this.router.navigate(['/login']);
                        break;
                    default:
                        return throwError(error);
                }
            })
        );
    }
}
