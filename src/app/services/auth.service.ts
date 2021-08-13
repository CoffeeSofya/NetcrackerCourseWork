import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces";
import Backendless from "backendless";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(user: User) {
    // const headers = { 'content-type': 'application/json'};
    // return this.http.post('https://sultryfireman.backendless.app/api/users/login ', user, {headers: headers}).subscribe(
    //   () => console.log('Login success'),
    //   (error) => console.warn(error),
    // )

    Backendless.UserService.login<User>(user.email, user.password)
      .then((result: User) => console.log('Registered User:', result))
      .catch(error => console.error('Can not Register User:', error.message));
  }


  regictration(user: User) {
    Backendless.UserService.register<User>(user)
      .then((result: User) => console.log('Registered User:', result))
      .catch(error => console.error('Can not Register User:', error.message));
  }

}
