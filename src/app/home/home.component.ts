import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];

  constructor() {
    const myUser: User = {
      nick: 'Cristobal',
      subnick: 'elskippa',
      age: 22,
      email: 'cristo@gmail.com',
      friend: true,
      uid: 1
    };
    const friendOne: User = {
      nick: 'Juventino',
      subnick: 'Juwar',
      age: 22,
      email: 'perezpera@hol.com',
      friend: false,
      uid: 1
    };
    const friendTwo: User = {
      nick: 'Brian',
      subnick: 'caboprivate',
      age: 22,
      email: 'padillasi@gmail.com',
      friend: true,
      uid: 1
    };
    const users: User[] = [myUser, friendOne, friendTwo];
    console.log('users = ', users);

    console.log('myUser = ', myUser);

    this.friends = [myUser, friendOne, friendTwo];
  }

  ngOnInit() {
  }

}
