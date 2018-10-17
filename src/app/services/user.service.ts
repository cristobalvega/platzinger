import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
      email: 'perezpera@ittepic.edu.mx',
      friend: false,
      uid: 2
    };
    const friendTwo: User = {
      nick: 'Brian',
      subnick: 'caboprivate',
      age: 22,
      email: 'padillasi@gmail.com',
      friend: true,
      uid: 3
    };
    const friendThree: User = {
      nick: 'Ernerst',
      subnick: 'cherne',
      age: 22,
      email: 'negrocherne@gmail.com',
      friend: true,
      uid: 4
    };
    const friendFour: User = {
      nick: 'Brian Casa',
      subnick: 'responsable',
      age: 22,
      email: 'casaslo@ittepic.edu.mx',
      friend: false,
      uid: 5
    };

    this.friends = [myUser, friendOne, friendTwo, friendThree, friendFour];
  }

  getFriends() {
    return this.friends;
  }
}
