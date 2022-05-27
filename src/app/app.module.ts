import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ExperienciaEducacionComponent } from './componentes/experiencia-educacion/experiencia-educacion.component';
import { ItemExperienciaEducacionComponent } from './componentes/experiencia-educacion/item-experiencia-educacion/item-experiencia-educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { BarraTitulosComponent } from './componentes/barra-titulos/barra-titulos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ItemHabilidadesComponent } from './componentes/habilidades/item-habilidades/item-habilidades.component';
import { ItemProyectoComponent } from './componentes/proyectos/item-proyecto/item-proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerLoginComponent } from './componentes/banners/login/banner-login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { EditarExperienciaEducacionComponent } from './componentes/experiencia-educacion/editar-experiencia-educacion/editar-experiencia-educacion.component';
import { interceptorProvider } from './interceptors/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarItemHabilidadComponent } from './componentes/habilidades/item-habilidades/editar-item-habilidad/editar-item-habilidad.component';
import { EditarCabeceraComponent } from './componentes/cabecera/editar-cabecera/editar-cabecera.component';
import { NuevaPlataformaComponent } from './componentes/habilidades/nueva-plataforma/nueva-plataforma.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { CargandoComponent } from './componentes/banners/cargando/cargando.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from './interceptors/spinner.interceptor';
import { BannerConfirmComponent } from './componentes/banners/confirm/banner-confirm.component';
import { CambioContrasenaComponent } from './componentes/banners/cambio-contrasena/cambio-contrasena.component';
import { InformacionComponent } from './componentes/banners/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ExperienciaEducacionComponent,
    ItemExperienciaEducacionComponent,
    HabilidadesComponent,
    BarraTitulosComponent,
    ProyectosComponent,
    ItemHabilidadesComponent,
    ItemProyectoComponent,
    BannerLoginComponent,
    HomeComponent,
    EditarExperienciaEducacionComponent,
    EditarItemHabilidadComponent,
    EditarCabeceraComponent,
    NuevaPlataformaComponent,
    EditarProyectoComponent,
    CargandoComponent,
    BannerConfirmComponent,
    CambioContrasenaComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProvider,
    {provide: HTTP_INTERCEPTORS, useClass:SpinnerInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
