import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {
  @Input() item: any;
  @Input() lista: any;
  @Input() i: any;

  @Input() IsLogged;

  @Output() actualizarItemProyecto = new EventEmitter<any>();

  //--Modal Confirm
  mensaje: string = "";
  abrirModalConfirmar: boolean = false;
  idModalConfirmar: number = null;
  uri: string = "";

  //--Modal Imagen
  verModal: boolean = false;
  urlImagenModal: String = "";

  constructor(
    private consultaDBService: ConsultaDBService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onEliminar(id: number) {
    this.mensaje="Está seguro que desea eliminar el item?";
    this.abrirModalConfirmar = true;
    this.idModalConfirmar = id;
  }

  eliminar() {
    this.consultaDBService.borrar('proyecto', this.idModalConfirmar).subscribe(
      data => {
        this.toastr.success('Item Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.actualizarItemProyecto.emit();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  activarModal(url: String) {
    this.verModal = true;
    this.urlImagenModal = url;
  }

  cerrarModalConfirmar(event: any) {
    this.abrirModalConfirmar = false;
  }

  desactivarModal() {
    this.verModal = false;
  }

  emitEliminarItem(event) {
    this.eliminar();
  }

}
