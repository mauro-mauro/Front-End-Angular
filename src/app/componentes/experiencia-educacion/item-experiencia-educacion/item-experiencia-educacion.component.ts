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

  verModal: boolean = false;
  urlImagenModal: String = "";

  constructor(
    private consultaDBService: ConsultaDBService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onEliminar(tituloBarra: string, id: number) {
    this.consultaDBService.borrar(tituloBarra.toLowerCase(), id).subscribe(
      data => {
        this.toastr.success('Item Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.actualizarItem.emit(tituloBarra.toLowerCase());
        //this.cargarProductos();
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

  desactivarModal() {
    this.verModal = false;
  }

}
