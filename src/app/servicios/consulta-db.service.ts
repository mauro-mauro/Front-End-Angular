import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDBService {

  private apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  obtenerExperiencia(): Observable<any[]>{
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get<any[]>(this.apiUrl + '/listar/experiencia', {headers:header});
  }

}
