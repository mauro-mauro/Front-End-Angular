import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {
  @Input() item:any;
  @Input() lista:any;
  @Input() i :any;

  @Input() IsLogged;

  @Output() actualizarItemProyecto = new EventEmitter<any>();

  verModal:boolean=false;
  urlImagenModal:String="";

  constructor(
    private consultaDBService: ConsultaDBService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onEliminar(id:number){
    this.consultaDBService.borrar('proyecto', id).subscribe(
      data => {
        this.toastr.success('Item Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.actualizarItemProyecto.emit();
        //this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  activarModal(url:String){
    this.verModal = true;
    this.urlImagenModal = url;
  }

  desactivarModal(){
    this.verModal = false;
  }

}
