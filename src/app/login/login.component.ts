import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {assertLessThan} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation = 'login';
  email: string = null;
  password: string = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
      alert('Loggeado correctamente');
      console.log('el data | login() = ', data);
    }).catch((error) => {
      alert('Ocurrio un error');
      console.log('el error | login() = ', error);
    });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then((data) => {
      alert('Registrado correctamente');
      console.log('el data | register() = ', data);
    }).catch((error) => {
      alert('Ocurrio un error');
      console.log('el error | register() = ', error);
    });
  }

}
