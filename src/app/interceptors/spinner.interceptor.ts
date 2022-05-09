import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../servicios/spinner.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor{

  constructor(private spinnerService:SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(req).pipe(
      finalize( ()=> this.spinnerService.hide()))
    }

}

//export const spinnerInterceptorService = [{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true}];
