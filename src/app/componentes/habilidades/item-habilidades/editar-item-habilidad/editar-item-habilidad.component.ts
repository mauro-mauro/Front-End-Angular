import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-editar-item-habilidad',
  templateUrl: './editar-item-habilidad.component.html',
  styleUrls: ['./editar-item-habilidad.component.css']
})
export class EditarItemHabilidadComponent implements OnInit {
  //parametros
  id: number
  accion: string;

  habilidad: any;

  plataforma: any = {
    plataforma: ""
  }

  bannerActivo: boolean = false;

  datosEditar: any = {
    id: null,
    habilidad: null,
    porcentaje: null
  }

  datosAgregar: any = {
    habilidad: null,
    porcentaje: 50,
    plataforma: {
      id: null
    }
  }

  editarPlataforma: any = {
    plataforma: null
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.accion = this.activatedRoute.snapshot.params.accion;
    this.datosAgregar.plataforma.id = this.id;
    this.getHabilidades();
  }

  onSubmit() {
    console.log(this.habilidad);
  }

  getHabilidades(): void {
    this.servicioDBConsulta.buscarPorId('plataforma', this.id)
      .subscribe((habilidad: any) => {
        this.habilidad = habilidad;
        this.plataforma.plataforma = habilidad.plataforma;
      });
  }

  onEliminar(id: number) {
    this.servicioDBConsulta.borrar('habilidad', id).subscribe(
      data => {
        this.toastr.success(`Eliminado correctamente`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getHabilidades();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }

    );
  }

  onEditar(id: number, habilidad: string, porcentaje: number) {
    this.datosEditar.id = id;
    this.datosEditar.habilidad = habilidad;
    this.datosEditar.porcentaje = porcentaje;
    this.bannerActivo = true;
  }

  onAceptarEdicion(id: number) {
    this.servicioDBConsulta.editar('habilidad', this.datosEditar, id).subscribe(
      data => {
        this.toastr.success(`Actualizado correctamente`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getHabilidades();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
    this.bannerActivo = false;
  }

  onAgregarHabilidad() {
    this.servicioDBConsulta.nuevo('habilidad', this.datosAgregar)
      .subscribe(
        data => {
          this.toastr.success(`Actualizado correctamente`, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.getHabilidades();
          this.datosAgregar.habilidad = "";
          this.datosAgregar.porcentaje = 50;
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
  }

  onEditarPlataforma() {
    this.editarPlataforma.plataforma = this.habilidad.plataforma;
    this.servicioDBConsulta.editar('plataforma', this.editarPlataforma, this.id)
      .subscribe(
        data => {
          this.toastr.success(`Actualizado correctamente`, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
  }

  onEliminarPlataforma() {

  }
}
