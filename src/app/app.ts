import { Component, signal, computed  } from '@angular/core';

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  // counter = signal<number>(2);

  // doubleCount = computed<number>(() => this.counter() * 2);
  // tripleCount = computed<number>(() => this.counter() * 3);


  // increment() {
  //   this.counter.update((value) => value + 1);
  // }


  // firstName = signal<string>('Shahroz');  
  // lastName =signal<string>('Butt');

  // fullName = computed<string>(()=> `${this.firstName()} ${this.lastName()}`);


  price = signal<number[]>([10,13,1500]);

  total = computed<number>(()=> this.price().reduce((acc, curr) => acc + curr, 0));

}


