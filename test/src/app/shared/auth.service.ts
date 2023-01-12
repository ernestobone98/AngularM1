import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  user:any = {
    username: "",
    password: ""
  };

  users = {
    "admin": "admin",
    "other": "other"
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn)
      });
    return isUserAdmin;
  }

  constructor() { }
}
