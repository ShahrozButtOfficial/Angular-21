import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
//   lName = "shahroz";
//   uName = "SHAHROZ";
//

  // today = new Date();

  // 
  


  user={
    name: 'shahroz',
    age: 20
  }
}


