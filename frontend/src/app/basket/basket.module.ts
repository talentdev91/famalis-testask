import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasketComponent } from "./basket.component";

@NgModule({
  declarations: [BasketComponent],
  exports: [BasketComponent],
  imports: [CommonModule],
})
export class BasketModule {}
