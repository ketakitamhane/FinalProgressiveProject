import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
<<<<<<< HEAD
  
=======
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from your authentication service

    const token = this.authService.getToken();

    if (request.url.includes("login") || request.url.includes("register")) {
      return next.handle(request);
    }

    // Clone the request and add the Authorization header with the token
    if (token) {
      request = request.clone({
        setHeaders: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Pass the modified request to the next interceptor or to the HTTP handler
    return next.handle(request);
  }
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
}
