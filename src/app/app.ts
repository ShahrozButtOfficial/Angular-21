import { Component, signal  } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  styles:[`
    .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
    h1{
      color: gold;
      align-items: center;
      text-align: center;
      background-color: black;
      padding: 10px 10px 9px 9px;
    }
    

input {
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}

input:focus {
  outline: none;
  border: 2px solid gold;
}

button {
  padding: 10px 18px;
  background: red;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bolder;
}

.btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}`]
})
export class App {
  // items = [
  //   'HTML',
  //   'CSS',
  //   'JavaScript',
  //   'TypeScript',
  //   'Angular'
  // ];

  // users =[
  //   {name: 'Shahroz', age: 25},
  //   {name: 'Ali', age: 30},
  //   {name: 'Ahmed', age: 35}
  // ];

  // items = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

  // onDelete(index: number) {
  //   this.items.splice(index, 1);
  // }

  // numbers =[10,30,1,0,15,9]
  num: number = 0;
  result:string = '';
  evenOdd(num: number){
    if(num %2 ===0){
      this.result= 'Even';
    }else{
      this.result= 'Odd';
    }
  }

  onInput(number: string){
    this.num = parseInt(number);
  }


}
