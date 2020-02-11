import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  invalidLogin = false;
  loginForm: FormGroup;

  constructor(private authService: AuthenticationService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  get email() { return this.loginForm.controls.email; }

  get password() { return this.loginForm.controls.password; }

  onSubmit(f) {

    this.submitted = true;

    if (f.valid) {
      const  logStatus = this.authService.authenticate(f.value);
      if(logStatus) { console.log('ok'); }
      else { console.log('invalid'); }



    }

  }

  ngOnInit() {
  }

}
