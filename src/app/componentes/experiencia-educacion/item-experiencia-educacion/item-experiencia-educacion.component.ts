import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-item-experiencia-educacion',
  templateUrl: './item-experiencia-educacion.component.html',
  styleUrls: ['./item-experiencia-educacion.component.css']
})
export class ItemExperienciaEducacionComponent implements OnInit {
  @Input() tituloBarra: any;
  @Input() lista: any;
  @Input() item: any;
  @Input() i = 0;
  @Input() IsLogged;

  @Output() actualizarItem = new EventEmitter<string>();

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

  onEliminar(tituloBarra: string, id: number) {
    this.mensaje="Está seguro que desea eliminar el item?";
    this.abrirModalConfirmar = true;
    this.uri = tituloBarra.toLowerCase();
    this.idModalConfirmar = id;
  }

  activarModal(url: String) {
    this.verModal = true;
    this.urlImagenModal = url;
  }

  desactivarModal() {
    this.verModal = false;
  }

  cerrarModalConfirmar(event: any) {
    this.abrirModalConfirmar = false;
  }

  eliminar() {
    this.consultaDBService.borrar(this.uri, this.idModalConfirmar).subscribe(
      data => {
        this.toastr.success('Item Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.actualizarItem.emit(this.uri);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  emitEliminarItem(event){
    this.eliminar();
  }

}
