import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerLoginComponent } from './componentes/banner-login/banner-login.component';
import { EditarCabeceraComponent } from './componentes/cabecera/editar-cabecera/editar-cabecera.component';
import { EditarExperienciaEducacionComponent } from './componentes/experiencia-educacion/editar-experiencia-educacion/editar-experiencia-educacion.component';
import { EditarItemHabilidadComponent } from './componentes/habilidades/item-habilidades/editar-item-habilidad/editar-item-habilidad.component';
import { NuevaPlataformaComponent } from './componentes/habilidades/nueva-plataforma/nueva-plataforma.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { ComponentGuard } from './guards/component.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login', component: BannerLoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'editar-experiencia-educacion/:accion/:id',
    component: EditarExperienciaEducacionComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  }, //editar
  {
    path: 'editar-experiencia-educacion/:accion',
    component: EditarExperienciaEducacionComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  }, //agregar
  {
    path: 'nueva-plataforma',
    component: NuevaPlataformaComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  },
  {
    path: 'editar-item-habilidad/:accion/:id',
    component: EditarItemHabilidadComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  },
  {
    path: 'editar-cabecera',
    component: EditarCabeceraComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  },
  {
    path: 'editar-proyecto/:accion/:id',
    component: EditarProyectoComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  }, //editar
  {
    path: 'editar-proyecto/:accion',
    component: EditarProyectoComponent,
    canActivate: [ComponentGuard],
    data: { expectedRol: ['admin', 'user'] }
  } //agregar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
