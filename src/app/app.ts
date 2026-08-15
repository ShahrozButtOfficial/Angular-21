import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signin } from './signin/signin';
import { Events } from './events/events';


@Component({
  selector: 'app-root',
  imports: [Login, Signin, Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0;

  handleClick(){
    console.log('Button clicked');
    this.hello();
  }

  hello(){
    console.log('Hello World');
  }

}

