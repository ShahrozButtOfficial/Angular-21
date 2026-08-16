import { Component, signal  } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  count = signal(0); //Signal Create
  value = 20;

  // count.update((value)=> value + 1); //Signal Update

  // items.mutate((items) => a.push(4)); //Signal Update
  // signals sunchronours

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement(){
    this.count.update((value) => value - 1);
  }

  reset(){
    this.count.set(0)
  }



}
