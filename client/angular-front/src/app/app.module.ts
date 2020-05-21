import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { ItemComponent } from "./components/item/item.component";
import { AddComponent } from "./components/add/add.component";

@NgModule({
  declarations: [AppComponent, TodoComponent, ItemComponent, AddComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
