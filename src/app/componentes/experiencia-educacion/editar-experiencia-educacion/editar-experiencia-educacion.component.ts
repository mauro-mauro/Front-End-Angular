import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaEducacion } from 'src/app/modelos/experiencia-educacion';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';


import { HttpEventType, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { SubirImagenService } from 'src/app/servicios/consulta-db-imagen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-experiencia-educacion',
  templateUrl: './editar-experiencia-educacion.component.html',
  styleUrls: ['./editar-experiencia-educacion.component.css']
})
export class EditarExperienciaEducacionComponent implements OnInit {
  @ViewChild("inputUrl") inputUrl: ElementRef | undefined;

  //parametros
  //accion: Agregar || Editar && Experiencia || Educacion
  accion: string;
  id: number

  //propiedades
  titulo: string = "";
  lugar: string = "";
  periodo: string = "";
  texto: string = "";
  imagen: any = {
    imagenUrl: "",
    imagenId: ""
  }

  errorCampo: boolean = false;
  // sinImagen:string="../../../assets/imgPagina/sin-imagen.svg";
  // miniaturaProvisoria:string;

  uriExperienciaEducacion: string;

  //File Input
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  imagenFile: File;
  imgMiniatura: File;

  quitarImagenEnDB: boolean = false;

  //edicion
  modoEdicion: boolean = false;

  experienciaEducacion: ExperienciaEducacion;

  ocupacionTitulo: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService,
    private toastr: ToastrService,
    private router: Router,
    private subirImagenService: SubirImagenService
  ) {

  }

  ngOnInit(): void {
    this.accion = this.activatedRoute.snapshot.params.accion;
    this.uriExperienciaEducacion = this.accion.split(' ')[1].toLowerCase();
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.uriExperienciaEducacion == "experiencia") this.ocupacionTitulo = "Ocupación"; else this.ocupacionTitulo = "Titulo";
    if (this.accion.split(' ')[0] === 'Editar') {
      this.modoEdicion = true;
      this.cargarDatos();
    }
  }

  cargarDatos() {
    this.servicioDBConsulta.buscarPorId(this.accion.split(' ')[1].toLowerCase(), this.id).subscribe(
      datos => {
        this.titulo = datos.titulo;
        this.lugar = datos.lugar;
        this.periodo = datos.periodo;
        this.texto = datos.texto;

        if (datos.imagen.imagenId != null) {
          this.imagen.id = datos.imagen.id;
          this.imagen.imagenUrl = datos.imagen.imagenUrl;
          this.imagen.imagenId = datos.imagen.imagenId;
        }
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  onSubmit() {
    const urlExperienciaEducacion = this.accion.split(' ')[1].toLowerCase();
    // let experienciaEducacion: ExperienciaEducacion;

    // experienciaEducacion = new ExperienciaEducacion(this.titulo, this.lugar,
    //   this.periodo, this.texto, this.urlImagen, this.idImagen);

    if (this.accion.split(' ')[0] === 'Agregar') {
      //let objetoPasadoATexto = JSON.stringify(experienciaEducacion);
      this.nuevo();

      //console.log(JSON.stringify(experienciaEducacion));
    } else if (this.accion.split(' ')[0] === 'Editar') {
      //console.log(this.activatedRoute.snapshot.params.id)
      this.editar();
    }
  }

  nuevo() {
    this.experienciaEducacion = new ExperienciaEducacion(this.titulo, this.lugar, this.periodo, this.texto);
    this.subirImagenService.subir(this.uriExperienciaEducacion, this.experienciaEducacion, this.imagenFile)
      .subscribe(
        data => {
          this.toastr.success(`${this.uriExperienciaEducacion} creada`, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
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

  editar() {
    this.experienciaEducacion = new ExperienciaEducacion(this.titulo, this.lugar, this.periodo, this.texto);
    this.experienciaEducacion.id = this.id;
    this.experienciaEducacion.imagen.id = this.imagen.id;
    this.subirImagenService.editar(this.uriExperienciaEducacion, this.experienciaEducacion, this.imagenFile,this.quitarImagenEnDB)
      .subscribe(
        data => {
          this.toastr.success(`${this.uriExperienciaEducacion} actualizado`, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
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




  onFileChange(event: any, inputUrl: string) {
    this.selectedFiles = event.target.files;
    //this.subirImagen();
    //-------setear imagen portada
    this.imagenFile = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imgMiniatura = evento.target.result;
    };
    fr.readAsDataURL(this.imagenFile);
  }

  onPressPeriodo(evento: any) {
    if (evento.target.value.length > 1) {
      this.errorCampo = false;
    } else {
      this.errorCampo = true;
    }
  }

  quitarImagen() {
    this.inputUrl.nativeElement.value = "";
    this.imagenFile = undefined;

    this.quitarImagenEnDB = true;
    this.imagen.imagenUrl = "";
    //this.imagen.imagenId = "";
  }

}

/*
editar(experienciaEducacion: ExperienciaEducacion, id: number) {
    this.servicioDBConsulta.editar(this.uriExperienciaEducacion, experienciaEducacion, id).subscribe(
      data => {
        this.toastr.success(`${this.uriExperienciaEducacion} actualizado`, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
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
*/
