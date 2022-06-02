import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  f1(x0:number, h:number){
    return (Math.pow((x0+h-1),2)-Math.pow((x0-h-1),2))/2/h;
  }

  f2(x0:number, h:number){
    return (Math.pow(Math.E, 2*(x0+h))-Math.pow(Math.E, 2*(x0-h)))/2/h;
  }

  f3(x0:number, h:number){
    return (x0+h+1-x0+h-1)/2/h;
  }

}
