import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ExperienciaEducacion } from '../modelos/experiencia-educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDBService {

  private apiUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public subirImagenAndObject(imagen: any, objeto: any) {

  }

  public listar(item: string): Observable<any[]> {
    //let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get<any[]>(`${this.apiUrl}/${item}/listar`); //, { headers: header }
  }

  public buscarPorId(item: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${item}/buscar/${id}`);
  }

  public nuevo(item: string, objeto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${item}/nuevo`, objeto);
  }

  public nuevoConUnaImagen(item: string, objeto: any, imagen: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', imagen);
    formData.append('objeto', objeto);

    const req = new HttpRequest('POST', `${this.apiUrl}/${item}/nuevo`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  public editar(item: string, objetoEditado: any, id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${item}/editar/${id}`, objetoEditado);
  }

  public borrar(item: string, id: number): Observable<any> {
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
