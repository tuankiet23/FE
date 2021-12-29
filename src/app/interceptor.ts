
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
// import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
import { JobRegisterService } from './services/job-register.service';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import { Injectable } from '@angular/core';
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private router: Router,
    private jobregister: JobRegisterService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error['status'] === 403) {
          localStorage.removeItem("token");
          this.router.navigate(['/auth/login']);
        }
        return throwError(error);
      }),
    );
  }
}

