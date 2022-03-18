import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerLoginComponent } from './componentes/banner-login/banner-login.component';
import { EditarExperienciaEducacionComponent } from './componentes/experiencia-educacion/editar-experiencia-educacion/editar-experiencia-educacion.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: BannerLoginComponent },
  { path: 'editar-experiencia-educacion/:accion', component: EditarExperienciaEducacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
