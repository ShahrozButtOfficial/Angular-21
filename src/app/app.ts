import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = signal<string>('');
  email = signal<string>('');

  submitForm(){
    alert(`Name: ${this.name()} \nEmail: ${this.email()} saved successfully!`);
  }
}
