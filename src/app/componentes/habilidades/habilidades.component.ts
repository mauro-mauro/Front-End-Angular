import { Component, Input, OnInit } from '@angular/core';
import { ITEMS_HABILIDADES } from 'src/app/item';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  @Input() lista: any;
  @Input() tituloBarra: any;
  @Input() urlIcono: any;

  @Input() IsLogin;

  //items: any;

  constructor() {
    //this.items = ITEMS_HABILIDADES;
  }

  ngOnInit(): void {
  }

}
