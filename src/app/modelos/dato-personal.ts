export class DatoPersonal {
  id?: number;
  nombre: string;
  profesion: string;
  texto: string;
  urlFacebook: string;
  urlGitHub: string;
  imagenPerfil: any = {
    id:null,
    imagenUrl: "",
    imagenId: ""
  };
  imagenPortada: any = {
    id:null,
    imagenUrl: "",
    imagenId: ""
  }
  constructor(nombre: string, profesion: string, texto: string, urlFacebook: string, urlGitHub: string) {
    this.nombre = nombre;
    this.profesion = profesion;
    this.texto = texto;
    this.urlFacebook = urlFacebook;
    this.urlGitHub = urlGitHub;
  }
}
