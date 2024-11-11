import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter {{counter}}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decrementBy()">-1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy(value: number = 1):number{
    console.log("Se suma")
    return this.counter += value;
  }

  decrementBy(value: number = 1):void{
    console.log("Se resta")
    this.counter -= value;
  }

  resetCounter(value: number = 10):void{
    console.log("reset");
    this.counter = value;
  }
}



