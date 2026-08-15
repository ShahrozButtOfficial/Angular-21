import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  styles:[`
    .hover-box {
      width: 200px;
      color: green;
      background-color: lightgray;
      text-align: center;
      padding: 10px;
      margin: 10px;
    }`]
})
export class App {
  handleClick() {
    alert('Button clicked!');
  }

  onTyping(event: any) {
    console.log("Typed", event.target.vaue)
  }

  onKeyUp(event: any) {
    console.log("Key Up", event.key)
  }


  onHover(){
    console.log("Mouse Hovered")
  }

  onLeave(){
    console.log("Mouse Left")
  }


  onBlur(){
    console.log("blur event")
  }

  onFocus(){
    console.log("focus event")
  }
}
