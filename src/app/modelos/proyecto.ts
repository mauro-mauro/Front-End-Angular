export class Proyecto {
  id?: number;
  nombreProyecto: string;
  programa: string;
  paginaWeb: string;
  repositorioGit: string;
  anio: string;
  texto: string;
  imagenId: string;
  imagenUrl: string;

  constructor(
    nombreProyecto: string,
    programa: string,
    paginaWeb: string,
    repositorioGit: string,
    anio: string,
    texto: string,
    imagenId: string,
    imagenUrl: string) {
    this.nombreProyecto = nombreProyecto;
    this.programa = programa;
    this.paginaWeb = paginaWeb;
    this.repositorioGit = repositorioGit;
    this.anio = anio;
    this.texto = texto;
    this.imagenId = imagenId;
    this.imagenUrl = imagenUrl;
  }

}
