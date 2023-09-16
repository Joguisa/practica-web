import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit{
  @Input() bookTitle!: string;
  @Output() clickedBook = new EventEmitter();
  constructor(private bookService: LibroService) {}

  ngOnInit(): void {
    
  }
  
  onClicked() {
    this.bookService.deleteBook(this.bookTitle);
  }

}
