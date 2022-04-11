import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DatoPersonal } from 'src/app/modelos/dato-personal';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';
import { SubirArchivoService } from 'src/app/servicios/subir-archivo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-cabecera.component.html',
  styleUrls: ['./editar-cabecera.component.css']
})
export class EditarCabeceraComponent implements OnInit {
  //propiedades
  nombre: string = null;
  profesion: string = null;
  texto: string = null;
  urlFacebook: string;
  urlGitHub: string;
  urlImagenPerfil: string = null;
  urlImagenPortada: string = null;

  //capturar primer registro en base de datos
  primerRegistro: boolean = false;

  //File Input
  selectedFiles: FileList;
  currentFile: File;
  message = '';

  constructor(
    private servicioDBConsulta: ConsultaDBService,
    private subirArchivoService: SubirArchivoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioDBConsulta.buscarPorId('dato-personal', 1)
      .subscribe(
        datos => {
          this.nombre = datos.nombre;
          this.profesion = datos.profesion;
          this.texto = datos.texto;
          this.urlFacebook = datos.urlFacebook;
          this.urlGitHub = datos.urlGitHub;
          this.urlImagenPerfil = datos.urlImagenPerfil;
          this.urlImagenPortada = datos.urlImagenPortada
        },
        err => {
          if (err.error.mensaje == "no existe") {
            this.primerRegistro = true;
            console.log("this.primerRegistro: " + this.primerRegistro);
          };
        }
      );
  }

  onSubmit() {

    if (this.primerRegistro) {
      this.agregarRegistro();
    } else {
      this.editarRegistro();
    }
  }

  agregarRegistro() {
    let datoPersonal: DatoPersonal;
    datoPersonal = new DatoPersonal(this.nombre, this.profesion, this.texto, this.urlFacebook, this.urlGitHub, this.urlImagenPerfil, this.urlImagenPortada);
    this.servicioDBConsulta.nuevo('dato-personal', datoPersonal)
      .subscribe(
        data => {
          this.toastr.success(`Datos personales creados`, 'OK', {
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

  editarRegistro() {
    let datoPersonal: DatoPersonal;
    datoPersonal = new DatoPersonal(this.nombre, this.profesion, this.texto, this.urlFacebook, this.urlGitHub, this.urlImagenPerfil, this.urlImagenPortada);
    console.log(datoPersonal);
    this.servicioDBConsulta.editar('dato-personal', datoPersonal, 1)
      .subscribe(
        data => {
          this.toastr.success(`Datos personales actualizados`, 'OK', {
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

  selectFile(evento: any, portadaPerfil: string, inputUrl: string) {

    this.selectedFiles = evento.target.files;
    this.upload(portadaPerfil, inputUrl);
  }

  upload(portadaPerfil: string, inputUrl: string) {
    this.currentFile = this.selectedFiles.item(0) as File;
    this.subirArchivoService.upload(this.currentFile).subscribe(
      event => {

        if (portadaPerfil == 'portada') {
          let nombreArchivoImgPortada: string = inputUrl.split("\\")[2];
          if (nombreArchivoImgPortada !== undefined)
            this.urlImagenPortada = `${environment.apiUrl}/imagen/ver?nombre=` + nombreArchivoImgPortada;
        } else if (portadaPerfil == 'perfil') {
          let nombreArchivoImgPerfil: string = inputUrl.split("\\")[2];
          if (nombreArchivoImgPerfil !== undefined)
            this.urlImagenPerfil = `${environment.apiUrl}/imagen/ver?nombre=` + nombreArchivoImgPerfil;
        }
      },
      err => {
        this.message = 'Could not upload the file!';
        this.currentFile = undefined!;
      });
    this.selectedFiles = undefined!;
  }

  quitarImagenPortada() {
    this.urlImagenPortada = null;
  }

  quitarImagenPerfil() {
    this.urlImagenPerfil = null;
  }

}
