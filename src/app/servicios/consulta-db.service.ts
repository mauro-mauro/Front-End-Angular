import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ExperienciaEducacion } from '../modelos/experiencia-educacion';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDBService {

  private apiUrl: String = "http://192.168.1.3:8080";

  constructor(private http: HttpClient) { }

  public listar(item:string): Observable<any[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrl}/${item}/listar`, { headers: header });
  }

  public buscarPorId(item:string, id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${item}/buscar/${id}`);
  }

  public nuevo(item:string, experienciaEducacion: ExperienciaEducacion):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/${item}/nuevo`,experienciaEducacion);
  }

  public editar(item:string, experienciaEducacion: ExperienciaEducacion, id: number):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${item}/editar/${id}`,experienciaEducacion);
  }

  public borrar(item:string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${item}/borrar/${id}`);
  }

  // //-------------------------------Educacion---------------------------------------------
  // obtenerEducacion(): Observable<any[]> {
  //   let header = new HttpHeaders().set('Type-content', 'aplication/json')

  //   return this.http.get<any[]>(`${this.apiUrlEducacion}/listar`, { headers: header });
  // }

  // //-------------------------------Proyectos---------------------------------------------
  // obtenerProyecto(): Observable<any[]> {
  //   let header = new HttpHeaders().set('Type-content', 'aplication/json')

  //   return this.http.get<any[]>(`${this.apiUrlProyecto}/listar`, { headers: header });
  // }

  // //-------------------------------Habilidades---------------------------------------------
  // obtenerHabilidad(): Observable<any[]> {
  //   let header = new HttpHeaders().set('Type-content', 'aplication/json')

  //   return this.http.get<any[]>(`${this.apiUrlHabilidad}/listar`, { headers: header });
  // }

}
