import { Component, signal  } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value: string ="home";
  tab: string = "home";

  categories = '';
  updateCat(value: string) {
    this.categories = value.toLowerCase();
  }
}
