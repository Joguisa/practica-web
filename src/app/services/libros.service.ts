import { Subject } from "rxjs";

export class LibroService {
    private books = ['El Psicoanalista', 'Filosofía', 'Clean Code'];
    bookSubject =  new Subject();

    addBook(nameBook: string){
        this.books.push(nameBook);
        this.bookSubject.next(nameBook);
    }

    getBooks(){
        return [...this.books];
    }

    deleteBook(nameBook: string){
        this.books = this.books.filter( x => x != nameBook);
        this.bookSubject.next(nameBook);
    }

}