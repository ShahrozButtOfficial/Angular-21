import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // status:string ="xyz";

  marks: number = 70;

  age: number = 0;

  updateAge(value: string){
    this.age = parseInt(value);
  }

  section = "home"
}
