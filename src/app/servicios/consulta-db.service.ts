import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDBService {

  private apiUrl: String = "http://localhost:8080";
  private apiUrlDatoPersonal: String = `${this.apiUrl}/dato-personal`;
  private apiUrlExperiencia: String = `${this.apiUrl}/experiencia`;
  private apiUrlEducacion: String = `${this.apiUrl}/educacion`;
  private apiUrlProyecto: String = `${this.apiUrl}/proyecto`;
  private apiUrlHabilidad: String = `${this.apiUrl}/habilidad`;

  constructor(private http: HttpClient) { }

  //-------------------------------Datos Personales---------------------------------------------

  //-------------------------------Experiencia---------------------------------------------
  obtenerExperiencia(): Observable<any[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrlExperiencia}/listar`, { headers: header });
  }

  //-------------------------------Educacion---------------------------------------------
  obtenerEducacion(): Observable<any[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrlEducacion}/listar`, { headers: header });
  }

  //-------------------------------Proyectos---------------------------------------------
  obtenerProyecto(): Observable<any[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrlProyecto}/listar`, { headers: header });
  }

  //-------------------------------Habilidades---------------------------------------------
  obtenerHabilidad(): Observable<any[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrlHabilidad}/listar`, { headers: header });
  }

}
