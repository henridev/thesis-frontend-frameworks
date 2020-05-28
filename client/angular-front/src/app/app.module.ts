import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./route/app-routing.module";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { ItemComponent } from "./components/item/item.component";
import { AddComponent } from "./components/add/add.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemComponent,
    AddComponent,
    HomeComponent,
    NavigationComponent,
    AuthorizationComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
