import { Component } from '@angular/core';
import { RaceSubscriber } from 'rxjs/internal/observable/race';
import { CountComponent } from '../count/count.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter = new CountComponent();
  result = [];

  constructor() {}
  obj:any = {}
  recieveInput(event){
    this.obj=event;
    this.count();

  }

  count(){
    this.result = [];
    this.result.push(this.counter.f1(parseFloat(this.obj.x0), parseFloat(this.obj.h)));
    this.result.push(this.counter.f2(parseFloat(this.obj.x0), parseFloat(this.obj.h)));
    this.result.push(this.counter.f3(parseFloat(this.obj.x0), parseFloat(this.obj.h)));

  }

}
