import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log('HomeComponent');
    const c = 1;
    const b = 2;
    console.log('c+ b = ', c + b);

    const e = '1';
    const f = '2';
    console.log('e + f =', e + f);

    const g = true;
    const h: object  = {};

    console.log('g = ', g);
    console.log('h = ', h);

    const i = [c, b, e, f, h];
    console.log('el arreglo', i);

    const j: boolean [] = [true, g];
    console.log('el arreglo j = ', j);

    const k: object[] = [{}, h];
    console.log('el valor de k =', k);

    const l: any[] = [1, 'aoe', {}, []];
    console.log('el valor dl arreglo l = ', l);
  }

  ngOnInit() {
  }

}
