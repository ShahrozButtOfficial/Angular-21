import { Component, signal } from '@angular/core';


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
  count = signal<number>(0);
  name = signal<string>('Angular');

  setCount(){
    this.count.set(2);
  }
}


