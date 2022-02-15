import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ExperienciaEducacionComponent } from './componentes/experiencia-educacion/experiencia-educacion.component';
import { ItemExperienciaEducacionComponent } from './componentes/item-experiencia-educacion/item-experiencia-educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { BarraTitulosComponent } from './componentes/barra-titulos/barra-titulos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ExperienciaEducacionComponent,
    ItemExperienciaEducacionComponent,
    HabilidadesComponent,
    BarraTitulosComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
