import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DatoPersonal } from 'src/app/modelos/dato-personal';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';
import { SubirImagenService } from 'src/app/servicios/consulta-db-imagen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-cabecera.component.html',
  styleUrls: ['./editar-cabecera.component.css']
})
export class EditarCabeceraComponent implements OnInit {
  @ViewChild("inputUrlImgPortada") inputUrlImgPortada: ElementRef | undefined;
  @ViewChild("inputUrlImgPerfil") inputUrlImgPerfil: ElementRef | undefined;

  //propiedades
  id: number;
  nombre: string = "";
  profesion: string = "";
  texto: string = "";
  urlFacebook: string = "";
  urlGitHub: string = "";

  imagenPerfilId: string = "";
  imagenPerfilUrl: string = "";

  imagenPortadaId: string = "";
  imagenPortadaUrl: string = "";

  //File Input
  imagenPortadaFile: File;
  imgMinPortada: File;
  imagenPerfilFile: File;
  imgMinPerfil: File;


  quitarImagenPerfilEnDB: boolean = false;
  quitarImagenPortadaEnDB: boolean = false;

  //capturar primer registro en base de datos
  primerRegistro: boolean = false;

  constructor(
    private servicioDBConsulta: ConsultaDBService,
    private subirArchivoService: SubirImagenService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioDBConsulta.buscarPorId('dato-personal', 1)
      .subscribe(
        datos => {
          this.id = datos.id;
          if (datos.nombre != null)
            this.nombre = datos.nombre;
          if (datos.profesion != null)
            this.profesion = datos.profesion;
          if (datos.texto != null)
            this.texto = datos.texto;
          if (datos.urlFacebook != null)
            this.urlFacebook = datos.urlFacebook;
          if (datos.urlGitHub != null)
            this.urlGitHub = datos.urlGitHub;

          if (datos.imagenPerfilId != null) {
            this.imagenPerfilId = datos.imagenPerfilId;
            this.imagenPerfilUrl = datos.imagenPerfilUrl;
          }

          if (datos.imagenPortadaId != null) {
            this.imagenPortadaId = datos.imagenPortadaId;
            this.imagenPortadaUrl = datos.imagenPortadaUrl;
          }
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
    datoPersonal = new DatoPersonal(this.nombre, this.profesion, this.texto, this.urlFacebook, this.urlGitHub);
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
    datoPersonal = new DatoPersonal(this.nombre, this.profesion, this.texto, this.urlFacebook, this.urlGitHub);
    datoPersonal.id = this.id;
    datoPersonal.imagenPerfilId = this.imagenPerfilId;
    datoPersonal.imagenPortadaId = this.imagenPortadaId;
    // console.log("datopersonal")
    // console.log(datoPersonal);
    this.subirArchivoService
      .editarDatosPersonales(datoPersonal, this.imagenPerfilFile, this.imagenPortadaFile, this.quitarImagenPerfilEnDB, this.quitarImagenPortadaEnDB)
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

  onFileChange(event: any, portadaPerfil: string, inputUrl: string) {
    //-------setear imagen portada
    if (portadaPerfil == 'portada') {
      this.imagenPortadaFile = event.target.files[0];
      const fr = new FileReader();
      fr.onload = (evento: any) => {
        this.imgMinPortada = evento.target.result;
      };
      fr.readAsDataURL(this.imagenPortadaFile);

      //-------setear imagen perfil
    } else if (portadaPerfil == 'perfil') {
      this.imagenPerfilFile = event.target.files[0];
      const fr = new FileReader();
      fr.onload = (evento: any) => {
        this.imgMinPerfil = evento.target.result;
      };
      fr.readAsDataURL(this.imagenPerfilFile);
    }


  }

  /*
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
  }*/

  quitarImagenPortada() {
    this.inputUrlImgPortada.nativeElement.value = "";
    this.imagenPortadaFile = undefined;

    this.quitarImagenPortadaEnDB = true;
    this.imagenPortadaUrl = "";
  }

  quitarImagenPerfil() {
    this.inputUrlImgPerfil.nativeElement.value = "";
    this.imagenPerfilFile = undefined;

    this.quitarImagenPerfilEnDB = true;
    this.imagenPerfilUrl = "";
  }

}
