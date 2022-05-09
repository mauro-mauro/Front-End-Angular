export class ExperienciaEducacion {
  id?: number;
  titulo: string;
  lugar: string;
  periodo: string;
  texto: string;
  imagenId: string;
  imagenUrl: string;

  constructor(titulo: string, lugar: string, periodo: string, texto: string, imagenId: string, imagenUrl: string) {
    this.titulo = titulo;
    this.lugar = lugar;
    this.periodo = periodo;
    this.texto = texto;
    this.imagenId = imagenId;
    this.imagenUrl = imagenUrl;
  }

}
