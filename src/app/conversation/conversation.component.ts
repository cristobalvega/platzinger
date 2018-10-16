import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User[];
  friend: User;
  constructor(private activatedRoute: ActivatedRoute) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
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
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    });
    console.log('El friend', this.friend);
  }

  ngOnInit() {
  }

}
