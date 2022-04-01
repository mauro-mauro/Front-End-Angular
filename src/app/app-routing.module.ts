import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerLoginComponent } from './componentes/banner-login/banner-login.component';
import { EditarExperienciaEducacionComponent } from './componentes/experiencia-educacion/editar-experiencia-educacion/editar-experiencia-educacion.component';
import { EditarItemHabilidadComponent } from './componentes/habilidades/item-habilidades/editar-item-habilidad/editar-item-habilidad.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad/nueva-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: BannerLoginComponent },
  { path: 'editar-experiencia-educacion/:accion/:id', component: EditarExperienciaEducacionComponent }, //editar
  { path: 'editar-experiencia-educacion/:accion', component: EditarExperienciaEducacionComponent }, //agregar
  { path: 'nueva-habilidad/:accion', component: NuevaHabilidadComponent },
  { path: 'editar-item-habilidad/:accion', component: EditarItemHabilidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
