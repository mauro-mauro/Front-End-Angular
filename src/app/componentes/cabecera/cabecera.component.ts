import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Output() IsLogin = new EventEmitter<boolean>();

  @ViewChild("botonLogin") botonLogin: ElementRef | undefined;
  @ViewChild("botonesMenu") botonesMenu: ElementRef | undefined;

  private isLogin: boolean = false;
  logInLogOut: string = this.isLogin ? "Log Out" : "Login";

  private esVisibleBotonMenu: boolean = true;
  private visibleBotonMenu(): string {
    return this.esVisibleBotonMenu ? 'flex' : "none";
  }

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.isLogin = !this.isLogin;
    this.logInLogOut = this.isLogin ? "Log Out" : "Login";
    this.IsLogin.emit(this.isLogin);
  }

  accionMenu() {
    this.botonesMenu?.nativeElement.setAttribute("style", `display:${this.visibleBotonMenu()}`);
    this.esVisibleBotonMenu = !this.esVisibleBotonMenu;
    console.log(`display:${this.visibleBotonMenu()}`);
  }


}
