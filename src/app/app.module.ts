import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ItemProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
