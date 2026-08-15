import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  imports: [],
  templateUrl: './couter.html',
  styleUrl: './couter.css',
})
export class Couter {
  count: number = 0;

  // onPlus(){
  //   this.count++;
  // }

  // onMinus(){
  //   if(this.count > 0){
  //     this.count--;
  //   }
    
  // }

  // onReset(){
  //   this.count = 0;
  // }


  handle(value: string) { 
    if(value === 'plus') {
      this.count++;
    } else if(value === 'minus') {
      if(this.count > 0) {
        this.count--;
      }
    } else if(value === 'reset') {
      this.count = 0;
    }
  }
}
