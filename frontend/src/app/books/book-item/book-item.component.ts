import { Component, Input } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-book-item",
  templateUrl: `./book-item.component.html`,
  styleUrls: ["./book-item.component.scss"],
})
export class BookItemComponent {
  @Input() bookDetails: any;

  constructor(private cartService: CartService) {}

  showDetails() {
    this.cartService.addToCart(this.bookDetails);
  }
}
