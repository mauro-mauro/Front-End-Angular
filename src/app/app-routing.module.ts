import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerLoginComponent } from './componentes/banner-login/banner-login.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: BannerLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
