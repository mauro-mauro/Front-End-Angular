import { Component, Input, OnInit } from '@angular/core';
import { ITEMS_PROYECTOS } from 'src/app/item';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() tituloBarra:any;
  @Input() urlIcono:any;

  items:any = ITEMS_PROYECTOS;

  constructor() { }

  ngOnInit(): void {
  }

}
