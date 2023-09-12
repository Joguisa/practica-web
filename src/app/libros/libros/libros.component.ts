import { Component } from '@angular/core';
import { LibroService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  books: string[] = []; 
  constructor(private bookService: LibroService) {
    this.books = bookService.getBooks();
  }

  deleteBook(book: string){
    
  }

  saveBook(f: any){
    if (f.valid) {
      
    }
  }

}
