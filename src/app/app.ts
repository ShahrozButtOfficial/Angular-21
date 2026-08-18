import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomp } from './headercomp/headercomp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headercomp] ,
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
 
 }
