import { Component } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

 books;
 title = 'List of Books';


  constructor(booksService: BooksService) {
    
    this.books = booksService.getBooks();

  }
 
}
