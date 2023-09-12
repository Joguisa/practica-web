import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros/libros.component';
import { LibroComponent } from './libro/libro/libro.component';
import { LibroService } from './services/libros.service';


@NgModule({
  declarations: [
    AppComponent, 
    UsuarioComponent, LibrosComponent, LibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
