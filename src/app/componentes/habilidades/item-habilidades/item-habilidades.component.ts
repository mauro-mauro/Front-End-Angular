import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-habilidades',
  templateUrl: './item-habilidades.component.html',
  styleUrls: ['./item-habilidades.component.css']
})
export class ItemHabilidadesComponent implements OnInit {
  @Input() item:any;

  @Input() IsLogged;

  constructor() { }

  ngOnInit(): void {
  }

}
