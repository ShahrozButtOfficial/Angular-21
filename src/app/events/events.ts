import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = 0;
  increment() {
    this.count++;
  }

  showEvent(event: any){
    console.log(event);
  }

  username = "";
  updateUser(value: string){
    this.username = value;
  }


  handleSubmit(event:any){
    event.preventDefault();
    console.log("Form submitted");
  }
}
