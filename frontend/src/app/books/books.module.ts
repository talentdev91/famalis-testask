import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookListComponent } from "./book-list/book-list.component";
import { BookItemComponent } from "./book-item/book-item.component";
import { BookService } from "./book.service";

@NgModule({
  declarations: [BookListComponent, BookItemComponent],
  exports: [BookListComponent, BookItemComponent],
  providers: [BookService],
  imports: [CommonModule],
})
export class BooksModule {}

