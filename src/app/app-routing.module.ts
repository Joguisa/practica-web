import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros/libros.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
