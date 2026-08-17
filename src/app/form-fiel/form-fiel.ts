import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-form-fiel',
  imports: [],
  templateUrl: './form-fiel.html',
  styleUrl: './form-fiel.css',
})
export class FormFiel {
  label = input<string>();
  // value = input<string>();
  valueChange = output<string>();

  type = input<string>('text');

  onInput(val: string){
    console.log("Child Value:" , val );
    this.valueChange.emit(val);
  }
}
