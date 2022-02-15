import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-titulos',
  templateUrl: './barra-titulos.component.html',
  styleUrls: ['./barra-titulos.component.css']
})
export class BarraTitulosComponent implements OnInit {
  @Input() tituloBarra:any;
  @Input() urlIcono:any;

  constructor() { }

  ngOnInit(): void {
  }

}
