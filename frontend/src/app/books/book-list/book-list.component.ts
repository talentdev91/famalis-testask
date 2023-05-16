import { Component, OnInit } from "@angular/core";
import { BookService, Book } from "../book.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBookDetails: any;
  selectedBook;
  constructor(private bookService: BookService) {}

  async ngOnInit() {
    this.books = await this.bookService.getBooks();

    for (let i = 0; i < this.books.length; i++) {
      let authorName: any = await this.bookService.getAuthorName(
        this.books[i].author
      );
      this.books[i].name = authorName.name;
    }
  }

  select(bookId: number) {
    this.selectedBook = bookId;
    this.selectedBookDetails = this.books.find((b) => b.id === bookId);
  }
}
