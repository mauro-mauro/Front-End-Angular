export class ExperienciaEducacion {
  id?: number;
  titulo: string;
  lugar: string;
  periodo: string;
  texto: string;
  imagen: any = {
    id:null,
    imagenUrl: "",
    imagenId: ""
  }

  constructor(titulo: string, lugar: string, periodo: string, texto: string) {
    this.titulo = titulo;
    this.lugar = lugar;
    this.periodo = periodo;
    this.texto = texto;
  }

}
