import { Component, signal, computed ,effect} from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  // username: string = 'shahroz';

  message: string = '';

  onMessage(msg: string) {
    this.message = msg;
  }

}


