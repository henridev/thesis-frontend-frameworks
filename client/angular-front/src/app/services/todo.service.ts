import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class TodoService {
  url: string = "/api/todo";
  constructor(public http: HttpClient) {}
  create(title, completed) {
    return this.http.post(this.url, { title, completed });
  }

  read(_id): Observable<any> {
    return this.http.get(this.url + `/${_id}`);
  }

  update(_id, status: string | boolean = "", title = ""): Observable<any> {
    return this.http.put(this.url + `/${_id}`, { status, title }, httpOptions);
  }

  delete(_id): Observable<any> {
    return this.http.delete(this.url + `/${_id}`);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url + "/all");
  }
}
