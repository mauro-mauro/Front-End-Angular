import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CambioContrasena } from 'src/app/modelos/cambio-contrasena';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.css']
})
export class CambioContrasenaComponent implements OnInit {
  cambioContrasena: CambioContrasena;

  oldPassword: string = "";
  newPassword: string = "";
  confirmarContrasena: string = "";

  //banner informacion
  abrirModalInformacion: boolean = false;
  mensaje: string = "";

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cerrarModalInformacion(evento: any) {
    this.abrirModalInformacion = false;
  }

  onSubmit() {
    if (this.newPassword !== this.confirmarContrasena) {
      this.mensaje = "No coincide la nueva contraseña y la confirmacion.";
      this.abrirModalInformacion = true;
    } else {
      this.cambioContrasena = new CambioContrasena(this.oldPassword, this.newPassword);
      this.authService.cambioContrasena(this.cambioContrasena).subscribe(
        data => {
          this.toastr.success('Contraseña actualizada', 'OK', {
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

}
