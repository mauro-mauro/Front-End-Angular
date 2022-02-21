import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {
  @Input() item:any;
  @Input() lista:any;
  @Input() i :any;

  verModal:boolean=false;
  urlImagenModal:String="";

  constructor() { }

  ngOnInit(): void {
  }

  activarModal(url:String){
    this.verModal = true;
    this.urlImagenModal = url;
  }

  desactivarModal(){
    this.verModal = false;
  }

}
