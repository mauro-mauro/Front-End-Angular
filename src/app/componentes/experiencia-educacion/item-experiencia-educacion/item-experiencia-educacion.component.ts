import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-experiencia-educacion',
  templateUrl: './item-experiencia-educacion.component.html',
  styleUrls: ['./item-experiencia-educacion.component.css']
})
export class ItemExperienciaEducacionComponent implements OnInit {
  @Input() lista:any;
  @Input() item:any;
  @Input() i = 0;
  @Input() IsLogin;

  constructor() { }

  ngOnInit(): void {
  }

  onEditar(){
    console.log(this.lista[this.i]);
  }

}
