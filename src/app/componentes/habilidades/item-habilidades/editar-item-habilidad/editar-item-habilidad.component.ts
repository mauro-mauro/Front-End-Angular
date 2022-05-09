import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GrupoHabilidad } from 'src/app/modelos/grupo-habilidad';
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

  grupoHabilidad: string;

  bannerActivo: boolean = false;

  datosEditar: any = {
    id: null,
    habilidad: null,
    porcentaje: null
  }

  datosAgregar: any = {
    habilidad: null,
    porcentaje: 50,
    grupoHabilidad: null
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.accion = this.activatedRoute.snapshot.params.accion;

    this.grupoHabilidad = this.accion.substring(this.accion.length, this.accion.indexOf(' ') + 1);
    this.datosAgregar.grupoHabilidad = this.grupoHabilidad;
    this.getHabilidades();
  }

  onSubmit() {
    console.log(this.habilidad);
  }

  getHabilidades(): void {
    this.servicioDBConsulta.buscarPorId('habilidad/lista', this.id)
      .subscribe((habilidad: any) => {
        this.habilidad = habilidad;
        // this.plataforma.plataforma = habilidad.grupoHabilidad;
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
          this.datosAgregar.grupoHabilidad =this.grupoHabilidad;
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
  }

  onEditarGrupoHabilidad() {
    this.servicioDBConsulta.editar('grupo-habilidad', new GrupoHabilidad(this.grupoHabilidad), this.id)
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

  onEliminarGrupoHabilidad() {
    this.servicioDBConsulta.borrarPorNombre('habilidad/con-grupo-habilidad',this.grupoHabilidad)
    .subscribe(
      data => {
        this.toastr.success(`Borrado correctamente`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}
