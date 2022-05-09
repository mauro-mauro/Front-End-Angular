export class DatoPersonal {
  id?: number;
  nombre: string;
  profesion: string;
  texto: string;
  urlFacebook: string;
  urlGitHub: string;

  imagenPerfilId: string;
  imagenPerfilUrl: string;

  imagenPortadaId: string;
  imagenPortadaUrl: string;

  constructor(nombre: string, profesion: string, texto: string, urlFacebook: string, urlGitHub: string) {
    this.nombre = nombre;
    this.profesion = profesion;
    this.texto = texto;
    this.urlFacebook = urlFacebook;
    this.urlGitHub = urlGitHub;
  }
}
