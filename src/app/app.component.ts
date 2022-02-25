import { Component, OnInit, Output } from '@angular/core';
import { ITEMS, ITEMS_EDUCACION } from './item';
import { ConsultaDBService } from './servicios/consulta-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'porfolio';
  //items = ITEMS;
  //itemsEducacion = ITEMS_EDUCACION;
  itemsExperiencia:Array<any>=[];
  itemsEducacion:Array<any>=[];
  itemsProyecto:Array<any>=[];
  itemsHabilidad:Array<any>=[];

  tituloBarraExperiencia:String = 'Experiencia';
  tituloBarraEducacion:String = 'Educacion';
  tituloBarraProyectos:String = 'Proyectos';
  tituloBarraHabilidades:String = 'Habilidades';

  urlIconoExperiencia:String = 'assets/imgEducacion/iconoExperiencia.svg';
  urlIconoEducacion:String = 'assets/imgEducacion/iconoEducacion.svg';
  urlIconoProyectos:String = 'assets/imgEducacion/iconoProyectos.svg';
  urlIconoHabilidades:String = 'assets/imgEducacion/iconoHabilidades.svg';


  constructor(private servicioConsultaDB:ConsultaDBService) { }

  ngOnInit(): void {
    this.initItemsExperiencia();
    this.initItemsEducacion();
    this.initItemsProyecto();
    this.initItemsHabilidad();
  }

  initItemsExperiencia(){
    this.servicioConsultaDB.obtenerExperiencia()
          .subscribe((itemsExperiencia:any) => this.itemsExperiencia = itemsExperiencia);
  }

  initItemsEducacion(){
    this.servicioConsultaDB.obtenerEducacion()
          .subscribe((itemsEducacion:any) => this.itemsEducacion = itemsEducacion);
  }

  initItemsProyecto(){
    this.servicioConsultaDB.obtenerProyecto()
          .subscribe((itemsProyecto:any) => this.itemsProyecto = itemsProyecto);
  }

  initItemsHabilidad(){
    this.servicioConsultaDB.obtenerHabilidad()
          .subscribe((itemsHabilidad:any) => this.itemsHabilidad = itemsHabilidad);
  }

}
