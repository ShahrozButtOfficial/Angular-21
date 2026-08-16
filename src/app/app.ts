import { Component, signal, computed ,effect} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  // name = signal('Sharoz');

  user =signal<{name:string,age:number}>({name:'Sharoz',age:20});

  updateName(value: string){
    this.user.update((user)=>({...user,name:value}));
  }

  updateAge(){
    this.user.update((user)=>({...user,age:user.age +1}));
  }
}


