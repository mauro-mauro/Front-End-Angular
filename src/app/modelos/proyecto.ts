export class Proyecto {
  id?: number;
  nombreProyecto: string = "";
  programa: string = "";
  repositorioGit: string = "";
  anio: string = "";
  texto: string = "";
  imagen: any = {
    imagenUrl: "",
    imagenId: ""
  }

  constructor(nombreProyecto: string, programa: string, repositorioGit: string, anio: string, texto: string) {
    this.nombreProyecto = nombreProyecto;
    this.programa = programa;
    this.repositorioGit = repositorioGit;
    this.anio = anio;
    this.texto = texto;
  }

}
