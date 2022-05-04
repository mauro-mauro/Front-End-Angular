import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { EMPTY, empty, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatoPersonal } from '../modelos/dato-personal';

@Injectable({
  providedIn: 'root'
})

export class SubirImagenService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiUrl}/imagen/subir`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  subir(apiUri: string, objeto: any, imagen: File): Observable<any> {
    let objetoPasadoATexto = JSON.stringify(objeto);
    const formData: FormData = new FormData();
    if (imagen == undefined) imagen = new File([""], "vacio");

    formData.append('imagen', imagen);
    formData.append('objeto', objetoPasadoATexto);

    return this.http.post<any>(`${this.apiUrl}/${apiUri}/nuevo`, formData);
  }

  editar(apiUri: string, objeto: any, imagen: File, quitarImagen: boolean): Observable<any> {
    let objetoPasadoATexto = JSON.stringify(objeto);
    const formData: FormData = new FormData();
    if (imagen == undefined) imagen = new File([""], "vacio");

    formData.append('imagen', imagen);
    formData.append('objeto', objetoPasadoATexto);
    formData.append('imagenId', objeto.imagen.id);
    formData.append('quitarImagen', `${quitarImagen}`);

    return this.http.put<any>(`${this.apiUrl}/${apiUri}/editar`, formData);
  }

  editarDatosPersonales(
          objeto: DatoPersonal,
          imagenPerfil: File,
          imagenPortada: File,
          quitarImagenPerfil: boolean,
          quitarImagenPortada: boolean
        ): Observable<any> {
    let objetoPasadoATexto = JSON.stringify(objeto);
    const formData: FormData = new FormData();
    if (imagenPerfil == undefined) imagenPerfil = new File([""], "vacio1");
    if (imagenPortada == undefined || imagenPortada == null) imagenPortada = new File([""], "vacio2");

    console.log(objeto);

    formData.append('imagenPerfil', imagenPerfil);
    formData.append('imagenPortada', imagenPortada);
    formData.append('objeto', objetoPasadoATexto);
    formData.append('imagenPerfilId', objeto.imagenPerfil.id);
    formData.append('imagenPortadaId', objeto.imagenPortada.id);
    formData.append('quitarImagenPerfil', `${quitarImagenPerfil}`);
    formData.append('quitarImagenPortada', `${quitarImagenPortada}`);

    return this.http.put<any>(`${this.apiUrl}/dato-personal/editar`, formData);
  }

  public nuevo(imagen: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('multipartFile', imagen);

    return this.http.post<any>(`${this.apiUrl}/imagen/subir`, formData);
  }

}
