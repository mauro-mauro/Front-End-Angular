import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerLoginComponent } from './componentes/banner-login/banner-login.component';
import { EditarCabeceraComponent } from './componentes/cabecera/editar-cabecera/editar-cabecera.component';
import { EditarExperienciaEducacionComponent } from './componentes/experiencia-educacion/editar-experiencia-educacion/editar-experiencia-educacion.component';
import { EditarItemHabilidadComponent } from './componentes/habilidades/item-habilidades/editar-item-habilidad/editar-item-habilidad.component';
import { NuevaPlataformaComponent } from './componentes/habilidades/nueva-plataforma/nueva-plataforma.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: BannerLoginComponent },
  { path: 'editar-experiencia-educacion/:accion/:id', component: EditarExperienciaEducacionComponent }, //editar
  { path: 'editar-experiencia-educacion/:accion', component: EditarExperienciaEducacionComponent }, //agregar
  { path: 'nueva-plataforma', component: NuevaPlataformaComponent },
  { path: 'editar-item-habilidad/:accion/:id', component: EditarItemHabilidadComponent },
  { path: 'editar-cabecera', component: EditarCabeceraComponent },
  { path: 'editar-proyecto/:accion/:id', component: EditarProyectoComponent }, //editar
  { path: 'editar-proyecto/:accion', component: EditarProyectoComponent } //agregar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
