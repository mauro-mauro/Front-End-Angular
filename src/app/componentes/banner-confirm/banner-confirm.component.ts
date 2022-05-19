import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-banner-confirm',
  templateUrl: './banner-confirm.component.html',
  styleUrls: ['./banner-confirm.component.css']
})
export class BannerConfirmComponent implements OnInit {
  @Input() mensaje: string;

  @Output() cerrarModalConfirmar = new EventEmitter<boolean>();
  @Output() emitEliminarItem = new EventEmitter<any>();

  constructor(
    private consultaDBService:ConsultaDBService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.cerrarModalConfirmar.emit(false);
  }

  onEliminar(){
    this.emitEliminarItem.emit();
  }

}
