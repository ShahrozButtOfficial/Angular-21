import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input<string>();
  clicked= output<string>();

  onClicked(){
    console.log("Card button Clicked (Child)");
    this.clicked.emit("Button Clicked Successfully")
  }
}
