import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ExperienciaEducacion } from '../modelos/experiencia-educacion';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDBService {

  private apiUrl: String = "http://192.168.1.3:8080";
  private apiUrlDatoPersonal: String = `${this.apiUrl}/dato-personal`;
  private apiUrlExperiencia: String = `${this.apiUrl}/experiencia`;
  private apiUrlEducacion: String = `${this.apiUrl}/educacion`;
  private apiUrlProyecto: String = `${this.apiUrl}/proyecto`;
  private apiUrlHabilidad: String = `${this.apiUrl}/habilidad`;

  constructor(private http: HttpClient) { }

  //-------------------------------Datos Personales---------------------------------------------

  //-------------------------------Experiencia---------------------------------------------
  public obtenerExperiencia(): Observable<any[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrlExperiencia}/listar`, { headers: header });
  }

  public guardarExperiencia(experienciaEducacion: ExperienciaEducacion):Observable<any>{
    return this.http.post<any>(`${this.apiUrlExperiencia}/nuevo`,experienciaEducacion);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrlExperiencia + `/borrar/${id}`);
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
