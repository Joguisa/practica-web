export class LibroService {
    private libros = ['El Psicoanalista', 'Filosofía', 'Clean Code'];

    addBook(nameBook: string){
        this.libros.push(nameBook);
    }

    getBooks(){
        return [...this.libros];
    }

    deleteBook(){
        this.libros.pop();
    }

}