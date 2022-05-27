import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  @Input() mensaje: string;

  @Output() cerrarModalInformacion = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  aceptar(){
    this.cerrarModalInformacion.emit(false);
  }

}
