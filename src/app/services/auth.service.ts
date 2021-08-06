import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(http: HttpClient) {
  }

  login(user: User) {}

  regictration() {}

}
