import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner-login',
  templateUrl: './banner-login.component.html',
  styleUrls: ['./banner-login.component.css']
})
export class BannerLoginComponent implements OnInit {

  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    console.log(this.loginUsuario);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },
      err => {
        this.errMsj = err.error.message;
        console.log("errMsj: Mensaje de error: " + err.error.message);
        this.toastr.error(this.errMsj,'Fail',{
          timeOut:3000, positionClass:'toast-top-center',
        });
      }
    );
  }

}
