import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = false;


  marks=85;
 

  showBox=true;

  toggleBox(){
    this.showBox=!this.showBox;
  }

  age = 0;
  updateAge(value: string) {
    this.age = parseInt(value, 10);
  }
}
