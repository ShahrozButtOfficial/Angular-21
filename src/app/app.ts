import { Component, signal } from '@angular/core';
import { Couter } from './couter/couter';


@Component({
  selector: 'app-root',
  imports: [Couter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
