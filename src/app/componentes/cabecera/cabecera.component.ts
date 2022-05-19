import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Output() IsLogged = new EventEmitter<boolean>();

  @ViewChild("botonLogin") botonLogin: ElementRef | undefined;
  @ViewChild("botonesMenu") botonesMenu: ElementRef | undefined; 1

  //propiedades
  nombre: string = null;
  profesion: string = null;
  texto: string = null;
  urlFacebook: string;
  urlGitHub: string;
  imagenPerfilId: string;
  imagenPerfilUrl: string;

  imagenPortadaId: string;
  imagenPortadaUrl: string;

  isLogged: boolean = this.tokenService.isLogged();
  logInLogOut: string;

  private esVisibleBotonMenu: boolean = true;
  private visibleBotonMenu(): string {
    return this.esVisibleBotonMenu ? 'flex' : "none";
  }

  constructor(
    private tokenService: TokenService,
    private servicioDBConsulta: ConsultaDBService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.IsLogged.emit(this.isLogged);
    this.logInLogOut = this.isLogged ? "Log Out" : "Login";

    this.cargarDatos();
  }

  cargarDatos() {
    this.servicioDBConsulta.listar('dato-personal')
      .subscribe(
        datos => {
          if (datos.length > 0) {
            this.nombre = datos[0].nombre;
            this.profesion = datos[0].profesion;
            this.texto = datos[0].texto;
            this.urlFacebook = datos[0].urlFacebook;
            this.urlGitHub = datos[0].urlGitHub;

            if (this.imagenPerfilId != '') {
              this.imagenPerfilUrl = datos[0].imagenPerfilUrl;
            }

            if (this.imagenPortadaId != '') {
              this.imagenPortadaUrl = datos[0].imagenPortadaUrl;
            }
          }

        }
      );
  }



  onLoginPress() {
    if (this.tokenService.isLogged()) {
      this.logInLogOut = "Login";
      this.isLogged = false;
      this.IsLogged.emit(this.isLogged);
      this.tokenService.logOut();
    } else {
      this.router.navigate(['/login']);
    }
  }

  accionMenu() {
    this.botonesMenu?.nativeElement.setAttribute("style", `display:${this.visibleBotonMenu()}`);
    this.esVisibleBotonMenu = !this.esVisibleBotonMenu;
    //console.log(`display:${this.visibleBotonMenu()}`);
  }


}
