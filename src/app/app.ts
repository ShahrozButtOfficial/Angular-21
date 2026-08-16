import { Component } from '@angular/core';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  imports: [PipeShortNamePipe, ConvertPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  // fullName: string = 'Shahroz Butt';
  

  USD = 1500;
  usdToPkrRate = 280;
}


