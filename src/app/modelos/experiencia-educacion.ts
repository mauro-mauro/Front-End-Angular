export class ExperienciaEducacion{
  id?:number;
  titulo:string;
  lugar:string;
  periodo:string;
  texto:string;
  url:string;

  constructor(titulo:string, lugar:string, periodo:string, texto:string, url:string){
    this.titulo=titulo;
    this.lugar=lugar;
    this.periodo=periodo;
    this.texto=texto;
    this.url=url;
  }

}
