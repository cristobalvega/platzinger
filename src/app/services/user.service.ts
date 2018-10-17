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
      email: 'crelvegalu@ittepic.edu.mx',
      friend: true,
      uid: 1
    };
    const friendOne: User = {
      nick: 'Juventino',
      subnick: 'Juwar',
      age: 22,
      email: 'juperezpe@ittepic.edu.mx',
      friend: false,
      uid: 2
    };
    const friendTwo: User = {
      nick: 'Brian',
      subnick: 'caboprivate',
      age: 22,
      email: 'brefpadillasi@ittepic.edu.mx',
      friend: true,
      uid: 3
    };
    const friendThree: User = {
      nick: 'Ernesto',
      subnick: 'cherne',
      age: 22,
      email: 'negrocherne@gmail.com',
      friend: true,
      uid: 4
    };
    const friendFour: User = {
      nick: 'Brian Casas',
      subnick: 'responsable',
      age: 22,
      email: 'bralcasaslo@ittepic.edu.mx',
      friend: false,
      uid: 5
    };

    this.friends = [myUser, friendOne, friendTwo, friendThree, friendFour];
  }

  getFriends() {
    return this.friends;
  }
}
