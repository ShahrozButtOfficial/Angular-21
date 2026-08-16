import { Component, signal, computed ,effect} from '@angular/core';
import { TodoApp } from './todo-app/todo-app';


@Component({
  selector: 'app-root',
  imports: [TodoApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
 
}


