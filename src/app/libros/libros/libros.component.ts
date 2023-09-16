import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibroService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit, OnDestroy {
  books: string[] = []; 
  private bookSuscription!: Subscription
  constructor(private bookService: LibroService) {}

  ngOnDestroy() {
    this.bookSuscription.unsubscribe()
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookSuscription = this.bookService.bookSubject.subscribe(()=> 
      this.books =  this.bookService.getBooks()
    )
  }

  deleteBook(bookTitle: string){
    this.bookService.deleteBook(bookTitle);
    // Actualiza la lista de libros en el componente si es necesario
    this.books = this.bookService.getBooks();
}


  saveBook(f: any){
    if (f.valid) {
      this.bookService.addBook(f.value.nameBook)
    }
  }

}
