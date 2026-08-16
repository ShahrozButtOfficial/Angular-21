import { Component, signal  } from '@angular/core';

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
  count = signal<number>(0);

  name = signal<string>('Shahroz');
  isAdmin = signal<boolean>(true);

  //array
  numbers = signal<number[]>([1, 2, 3]);

  //object
  user = signal<{name: string,age: number}>({
    name: 'shahroz',
    age: 20
  })

  username = signal<User>({
    name: 'shahroz',
    age: 20
  })


  directUpdate() {
    // this.count.set(this.count() + 1);
    // this.count.set(20);

    // this.numbers.set([100,200,300]);

    // this.name.set('Ali');


    // this.username.set({
    //   name: 'Ali',
    //   age: 30
    // })

  }


  addNumber() {
    //this.numbers.update(arr => [...arr, 400]); //...spread operator is used to create a new array with the existing elements and the new element added at the end.

    this.username.update(user => ({
      ...user, 
      age: user.age + 1,
      name: "Shahroz"
    })); 
  }

}


