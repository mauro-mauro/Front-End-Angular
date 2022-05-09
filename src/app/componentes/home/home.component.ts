import { Component, Input, OnInit } from '@angular/core';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'portfolio';
  //items = ITEMS;
  //itemsEducacion = ITEMS_EDUCACION;
  itemsExperiencia: Array<any> = [];
  itemsEducacion: Array<any> = [];
  itemsProyecto: Array<any> = [];
  itemsHabilidad: Array<any> = [];

  tituloBarraExperiencia: String = 'Experiencia';
  tituloBarraEducacion: String = 'Educacion';
  tituloBarraProyectos: String = 'Proyectos';
  tituloBarraHabilidades: String = 'Habilidades';

  urlIconoExperiencia: String = 'assets/imgEducacion/iconoExperiencia.svg';
  urlIconoEducacion: String = 'assets/imgEducacion/iconoEducacion.svg';
  urlIconoProyectos: String = 'assets/imgEducacion/iconoProyectos.svg';
  urlIconoHabilidades: String = 'assets/imgEducacion/iconoHabilidades.svg';

  isLogged: boolean;

  constructor(private servicioConsultaDB: ConsultaDBService) { }

  ngOnInit(): void {
    this.initItemsExperiencia();
    this.initItemsEducacion();
    this.initItemsProyecto();
    this.initItemsHabilidad();
  }

  initItemsExperiencia() {
    this.servicioConsultaDB.listar("experiencia")
      .subscribe((itemsExperiencia: any) => {
        this.itemsExperiencia = itemsExperiencia;
      }
      );
  }

  initItemsEducacion() {
    this.servicioConsultaDB.listar("educacion")
      .subscribe((itemsEducacion: any) => this.itemsEducacion = itemsEducacion);
  }

  initItemsProyecto() {
    this.servicioConsultaDB.listar("proyecto")
      .subscribe((itemsProyecto: any) => this.itemsProyecto = itemsProyecto);
  }

  initItemsHabilidad() {
    this.servicioConsultaDB.listar("habilidad")
      .subscribe((itemsHabilidad: any) => this.itemsHabilidad = itemsHabilidad);
  }

  IsLogged(e) {
    this.isLogged = e;
  }

  actualizarItem(event) {
    if (event == 'experiencia') {
      this.initItemsExperiencia();
    } else if (event == 'educacion') {
      this.initItemsEducacion();
    }
  }

  actualizarItemProyecto(event) {
    this.initItemsProyecto();
  }
}
