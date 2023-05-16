import { Component, OnInit } from "@angular/core";
import { CartService } from "../books/cart.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"],
})
export class BasketComponent implements OnInit {
  books: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.books = this.cartService.getBooks(); // Get the selected books from the CartService
  }

  // Other basket methods...
}
