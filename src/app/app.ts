import { Component, signal, computed ,effect } from '@angular/core';

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  // count = signal<number>(0);

  // constructor() {
  //   effect(()=>{
  //     console.log(`Count is ${this.count()}`);
  //   })
  // }

  // increment() {
  //   this.count.update((c) => c + 1);
  // }


  // isDarkMode = signal<boolean>(false);

  // constructor() {
  //   effect(()=>{
  //     if(this.isDarkMode()) {
  //       document.body.style.backgroundColor = 'black';
  //       document.body.style.color = 'white';
  //     }else{
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     }
  //   });
  // }

  // toggleButton(){
  //   this.isDarkMode.update((mode) => !mode);
  // }


  message = signal<string>('Hello, Angular Signals!');
  constructor() {
    effect(()=>{
      if(this.message()) {
        setTimeout(() => {
          this.message.set('');
        }, 3000);
      }
    });
    
  }

  showMessage() {
    this.message.set('Hello, Angular Signals!');
  }


}


