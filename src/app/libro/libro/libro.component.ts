import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  @Input() bookTitle!: string;
  @Output() clickedBook = new EventEmitter();
  

  onClicked() {
    this.clickedBook.emit();
    
  }

}
