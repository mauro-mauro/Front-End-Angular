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

  itemsExperiencia:Array<any>=[];

  constructor(private servicioConsultaDB:ConsultaDBService) { }

  ngOnInit(): void {
    this.servicioConsultaDB.obtenerExperiencia().subscribe( (itemsExperiencia:any) => {
      this.itemsExperiencia = itemsExperiencia
      console.log(itemsExperiencia);
    } );

  }
}
