import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // value = 10;

  // value = 'shahroz';

//Data Typed | Properties
  name : string | number = 'shahroz'; // Union Type
  age: number = 10;
  isValid: boolean = true;
  Any: any;
  Undefined: undefined;
  Unknown: unknown;


  handleClick() {
    let value;
    value = 'shahroz';
    value =10;
    console.log(value);
  }


  sum(a: number, b: number){
    console.log(a + b);
  }
}

