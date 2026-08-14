import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
