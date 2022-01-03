import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../../item';

@Component({
  selector: 'app-item-experiencia-educacion',
  templateUrl: './item-experiencia-educacion.component.html',
  styleUrls: ['./item-experiencia-educacion.component.css']
})
export class ItemExperienciaEducacionComponent implements OnInit {
  @Input() item = ITEMS[0];
  @Input() i = 0;
  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
