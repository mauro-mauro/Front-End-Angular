import { Component, Input, OnInit, Output } from '@angular/core';
import { ITEMS } from 'src/app/item';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {
  @Input() lista:any;
  @Input() tituloBarra:any;
  @Input() urlIcono:any;

  @Input() IsLogin;

  //items = ITEMS;
  i = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
