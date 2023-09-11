import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  books = ['Primer Amor', 'Meditaciones', 'Minguito'];

  deleteBook(book: string){
    this.books = this.books.filter( p => p !== book)
  }

  saveBook(f: any){
    if (f.valid) {
      this.books.push(f.value.bookName);
    }
  }

}
