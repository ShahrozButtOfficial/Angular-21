import { Component, signal } from '@angular/core';
import { form , Field} from '@angular/forms/signals';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule,Field], 
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {

  //form model base on signal
  loginModel = signal({
    email: '',
    password: ''
  });

  //create form from signal model
  loginForm = form(this.loginModel);

  submit(){
    console.log(this.loginModel());
  }

}
