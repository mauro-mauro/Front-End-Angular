import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../servicios/token.service';
import { catchError, concatMap } from 'rxjs/operators';
import { JwtDto } from '../modelos/jwt-dto';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

const AUTHORIZATION = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();

    intReq = this.addToken(req, token);

    return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 401 || err.status === 409 || err.error.path === "/auth/cambiar-contrasena") {
        const dto: JwtDto = new JwtDto(this.tokenService.getToken());
        return this.authService.refresh(dto).pipe(concatMap((data: any) => {
          console.log('refreshing....');
          this.tokenService.setToken(data.token);
          intReq = this.addToken(req, data.token);
          ;
          return next.handle(intReq);
        }));
      } else {
        this.router.navigate(['/']);
        this.tokenService.logOut();
        return throwError(err);
      }
    }));
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
  }
}

export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }];
