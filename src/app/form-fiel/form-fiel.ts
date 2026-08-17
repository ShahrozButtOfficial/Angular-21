import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-fiel',
  imports: [],
  templateUrl: './form-fiel.html',
  styleUrl: './form-fiel.css',
})
export class FormFiel {
  label = input<string>();
  value = input<string>();

  type = input<string>('text');
}
