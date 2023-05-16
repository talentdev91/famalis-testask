import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseService } from "./app.service";
import { BooksModule } from "./books/books.module";
import {BasketModule} from './basket/basket.module'
@NgModule({
  declarations: [AppComponent],
  imports: [BooksModule, BasketModule, BrowserModule, AppRoutingModule],
  providers: [BaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}

