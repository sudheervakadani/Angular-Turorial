import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('token_id'));

    const authReq = request.clone({ headers });
    console.log("interceptor working");
    return next.handle(authReq);
  }
}
