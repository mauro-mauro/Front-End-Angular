import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITEMS_PROYECTOS } from 'src/app/item';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() lista:any;
  @Input() tituloBarra:any;
  @Input() urlIcono:any;

  @Input() IsLogged;

  @Output() actualizarItemProyecto = new EventEmitter<string>();

  //items:any = ITEMS_PROYECTOS;

  constructor() { }

  ngOnInit(): void {
  }

  emitirActualizarItemProyecto(event){
    this.actualizarItemProyecto.emit(event);
  }

}
