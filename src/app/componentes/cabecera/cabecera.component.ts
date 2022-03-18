import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Output() IsLogged = new EventEmitter<boolean>();

  @ViewChild("botonLogin") botonLogin: ElementRef | undefined;
  @ViewChild("botonesMenu") botonesMenu: ElementRef | undefined;

  isLogged: boolean = this.tokenService.isLogged();
  logInLogOut: string = this.isLogged ? "Log Out" : "Login";

  private esVisibleBotonMenu: boolean = true;
  private visibleBotonMenu(): string {
    return this.esVisibleBotonMenu ? 'flex' : "none";
  }

  constructor(private tokenService: TokenService, private router:Router) { }

  ngOnInit(): void {
    this.IsLogged.emit(this.isLogged);
  }

  onLoginPress() {
    if (this.tokenService.isLogged) {
      this.logInLogOut = "Log Out";
      this.tokenService.logOut();
    } else {
      this.logInLogOut = "Login";
      this.router.navigate(['login']);
    }
  }

  accionMenu() {
    this.botonesMenu?.nativeElement.setAttribute("style", `display:${this.visibleBotonMenu()}`);
    this.esVisibleBotonMenu = !this.esVisibleBotonMenu;
    console.log(`display:${this.visibleBotonMenu()}`);
  }


}
