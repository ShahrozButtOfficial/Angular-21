import { CommonModule } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { FormBuilder, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  // name = signal('');
  // email = signal('');


  // submitForm() {
  //   console.log('Form submitted:', this.name(), this.email());
  //}

  user = signal({
    name: '',
    email: ''
  });

  form:any

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:[''],
      email:['']
    })


    this.form.valueChanges.subscribe((value:any) => {this.user.set(value)})
  }

  submitForm() {
    console.log('Form submitted:', this.user().name, this.user().email);
  }


}
