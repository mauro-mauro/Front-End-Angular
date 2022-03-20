import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaEducacion } from 'src/app/modelos/experiencia-educacion';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-editar-experiencia-educacion',
  templateUrl: './editar-experiencia-educacion.component.html',
  styleUrls: ['./editar-experiencia-educacion.component.css']
})
export class EditarExperienciaEducacionComponent implements OnInit {

  //parametros
  //accion: Agregar || Editar && Experiencia || Educacion
  accion: string;
  id: number

  //propiedades
  titulo: string = "";
  lugar: string = "";
  periodo: string = "";
  texto: string = "";
  url: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accion = this.activatedRoute.snapshot.params.accion;
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.accion.split(' ')[0] === 'Editar')
      this.cargarDatos();
  }

  onSubmit() {
    const agregarEditar = this.accion.split(' ')[1].toLowerCase();
    const experienciaEducacion = new ExperienciaEducacion(this.titulo, this.lugar,
      this.periodo, this.texto, this.url);
    if (this.accion.split(' ')[0] === 'Agregar') {
      this.nuevo(agregarEditar, experienciaEducacion);
    } else if (this.accion.split(' ')[0] === 'Editar') {
      //console.log(this.activatedRoute.snapshot.params.id)
      this.editar(agregarEditar, experienciaEducacion, this.id);
    }

  }

  nuevo(item, experienciaEducacion: ExperienciaEducacion) {
    this.servicioDBConsulta.nuevo(item, experienciaEducacion).subscribe(
      data => {
        this.toastr.success(`${item} creada`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

  editar(item, experienciaEducacion: ExperienciaEducacion, id: number) {
    // console.log(item);
    // console.log(experienciaEducacion);
    this.servicioDBConsulta.editar(item, experienciaEducacion, id).subscribe(
      data => {
        this.toastr.success(`${item} actualizado`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );

  }

  cargarDatos() {
    this.servicioDBConsulta.buscarPorId(this.accion.split(' ')[1].toLowerCase(), this.id).subscribe(
      datos => {
        this.titulo = datos.titulo;
        this.lugar = datos.lugar;
        this.periodo = datos.periodo;
        this.texto = datos.texto;
        this.url = datos.url;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
