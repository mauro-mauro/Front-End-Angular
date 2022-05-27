import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CambioContrasena } from '../modelos/cambio-contrasena';
import { JwtDto } from '../modelos/jwt-dto';
import { LoginUsuario } from '../modelos/login-usuario';
import { NuevoUsuario } from '../modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = `${environment.apiUrl}/auth/`;

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  public cambioContrasena(cambioContra:CambioContrasena):Observable<CambioContrasena>{
    return this.httpClient.put<CambioContrasena>(this.authURL + 'cambiar-contrasena', cambioContra);
  }

  public refresh(dto: JwtDto):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'refresh', dto);
  }
}
