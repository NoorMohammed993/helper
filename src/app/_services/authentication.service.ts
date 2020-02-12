import { Injectable } from '@angular/core';

const users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(loginInfo) {
    const user = users.find(x => x.email === loginInfo.email && x.password === loginInfo.password);
    if (user) {
      return user;
    }
    return false;
  }
}
