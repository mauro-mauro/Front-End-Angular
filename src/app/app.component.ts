import { Component, Output } from '@angular/core';
import { ITEMS, ITEMS_EDUCACION } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio';
  items = ITEMS;
  itemsEducacion = ITEMS_EDUCACION;

  tituloBarraExperiencia:String = 'Experiencia';
  tituloBarraEducacion:String = 'Educacion';
  tituloBarraProyectos:String = 'Proyectos';
  tituloBarraHabilidades:String = 'Habilidades';

  urlIconoExperiencia:String = 'assets/imgEducacion/iconoExperiencia.svg';
  urlIconoEducacion:String = 'assets/imgEducacion/iconoEducacion.svg';
  urlIconoProyectos:String = 'assets/imgEducacion/iconoProyectos.svg';
  urlIconoHabilidades:String = 'assets/imgEducacion/iconoHabilidades.svg';
}
