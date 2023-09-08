import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros = ['Primer Amor', 'Meditaciones', 'Minguito'];

  eliminarLibro(libro: string){
    this.libros = this.libros.filter( p => p !== libro)
  }

}
