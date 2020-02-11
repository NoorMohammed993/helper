import { Injectable } from '@angular/core';

const users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(loginInfo) {
    const user = users.find(x => x.username === loginInfo.username && x.password === loginInfo.password);
    console.log(user);
    if (user) {
      return {
        id: user.id,
        username: user.username,
        role: user.role,
        token: 'fake-jwt-token'
      };
    }
    return Error('Username or password is incorrect');
  }
}
