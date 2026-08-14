import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signin } from './signin/signin';


@Component({
  selector: 'app-root',
  imports: [Login, Signin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Angular Tutorial";
  // isAdmin= true;
  isAdmin= false;
  count = 5;
  price = 199.99;
  isLogin = true;

  Title = signal('angular-tutorial signal');

  getUser(){
    return "Shahroz";
  }
}
