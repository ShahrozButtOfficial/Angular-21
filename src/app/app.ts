import { Component } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { FormFiel } from "./form-fiel/form-fiel";



@Component({
  selector: 'app-root',
  imports: [FormField, FormFiel],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  
}