import { Component, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  name = signal('');
  email = signal('');


  submitForm() {
    console.log('Form submitted:', this.name(), this.email());
  }
}
