import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMvYUKSyvlfGcuZDpDQCTKON9JBbkdOhhYnbGGj22sQ&s";
  isDisabled = true; 
  username = "shahroz";
  isActive =true;
  boxWidth = 100;
  bgColor = "red";
  count =signal(0);

  incr(){
    this.count.update((value)=> value + 2)
  }


}
