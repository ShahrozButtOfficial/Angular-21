import { Component, signal, computed ,effect} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  counter = signal<number>(2);
  doubleCount = computed(()=> this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(`Double value: ${this.doubleCount()}`);
    });
  }

  increment() {
    this.counter.update((value) => value + 1);
  }
}


