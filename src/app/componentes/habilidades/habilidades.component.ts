import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  @Input() tituloBarra:any;
  @Input() urlIcono:any;

  constructor() { }

  ngOnInit(): void {
  }

}
