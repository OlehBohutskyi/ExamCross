import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountComponent } from './count.component';

describe('CountComponent', () => {
  let component: CountComponent;
  let fixture: ComponentFixture<CountComponent>;
  let count: CountComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(()=>{
    count = new CountComponent();
  });

  it('Створення екземпляру класу', () => {
    expect(count).toBeTruthy();
  });

  fit('Розрахунок f1 для x0=1, h=0.01',()=>{
    let x0 = 1;
    let h = 0.01;
    let r = (Math.pow((x0+h-1),2)-Math.pow((x0-h-1),2))/2/h;
    expect(Math.round(r)).toBe(Math.round(component.f1(x0,h)));
  });

  fit('Розрахунок f2 для x0=1, h=0.01',()=>{
    let x0 = 1;
    let h = 0.01;
    let r = (Math.pow(Math.E, 2*(x0+h))-Math.pow(Math.E, 2*(x0-h)))/2/h;
    expect(Math.round(r)).toBe(Math.round(component.f2(x0,h)));
  });

  fit('Розрахунок f3 для x0=1, h=0.01',()=>{
    let x0 = 1;
    let h = 0.01;
    let r = (x0+h+1-x0+h-1)/2/h;
    expect(Math.round(r)).toBe(Math.round(component.f3(x0,h)));
  });
});
