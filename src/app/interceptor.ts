import { Observable, tap } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JobRegisterService } from './services/job-register.service';

// import { Injectable } from '@angular/core';
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private router: Router,
  private jobregister: JobRegisterService  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let modifiedReq;
    const token = localStorage.getItem('token');

    // we need the heck clone because the HttpRequest is immutable
    // https://angular.io/guide/http#immutability
    if (token) {
      modifiedReq = request.clone();
      modifiedReq.headers.set('Authorization', "Bearer" + token);
    }

    return next.handle(modifiedReq ? modifiedReq : request).pipe(tap(() => {
        // do nothing
    },
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        alert('what the heck, 0 HTTP code?');
      }
      if (err.status !== 401) {
        return;
      }
      // this.authService.login();
      this.router.navigate(['/login'])
    }
  }));
 }
// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const jsonReq: HttpRequest<any> = request.clone({
//       setHeaders: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//       }
//   });
//   return next.handle(jsonReq);
// }
}
