import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'helper';

  ngOnInit() {
    const users = [{
      id: 4466,
      email: 'admin@admin.com',
      role: 'sysAdmin',
      token: 'fake-jwt-token-admin',
      password: '123456'
    },
    {
      id: 4467,
      email: 'merchant@merchant.com',
      role: 'merchant',
      token: 'fake-jwt-token-merchant',
      password: '123456'
    }];


    localStorage.setItem('users', JSON.stringify(users));

  }

}
