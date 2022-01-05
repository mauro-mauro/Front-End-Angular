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

}
