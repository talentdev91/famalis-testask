import { Injectable } from "@angular/core";
import { Book } from "./book.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  books: Book[] = [];

  addToCart(book: Book) {
    // Add the selected book to the array
    this.books.push(book);
  }

  getBooks() {
    // Return the array of selected books
    return this.books;
  }

  clearCart() {
    // Clear the array of selected books
    this.books = [];
    return this.books;
  }
}
