import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { TodoComponent } from "../pages/todo/todo.component";
import { AuthorizationComponent } from '../pages/authorization/authorization.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "authorization",
    component: AuthorizationComponent,
  },
  {
    path: "todos",
    component: TodoComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
