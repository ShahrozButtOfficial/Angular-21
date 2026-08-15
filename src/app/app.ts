import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';
  city: string = '';
  email: string = '';


  updateName(value: string) {
    this.name = value;
  }

  getEmail(value: string) {
    this.email = value;
  } 
}
