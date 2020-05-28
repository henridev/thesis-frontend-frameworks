import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthorizationService {
  url: string = "/api/authorization";
  userInfo: EventEmitter<Object> = new EventEmitter();
  constructor(public http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.url + `/login`, { email, password }).pipe(
      map(res => {
        this.userInfo.emit(res)
        return res
      })
    )
  }
  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url + `/signup`, { name, email, password });
  }
}
