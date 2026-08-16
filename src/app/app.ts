import { Component, signal, computed ,effect} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
//  count = signal(0);

//  isLoggedIn = signal(false);


//  items= signal<string[]>(['item1', 'item2', 'item3']);

//  addItem(){
//   this.items.update(items => [...items, `HTML`]);
//  }

  role = signal<'admin' | 'user'>('user');

  features = signal<string[]>([
    "Dashboard",
    "Settings",
    "Profile",
  ]);

  makeAdmin(){
    this.role.set('admin');
    this.features.update(feature=> [...feature,'Admin Panel','User Management']);
  }

  makeUser(){
    this.role.set('user');
    this.features.update(feature=> feature.filter(f => f !== 'Admin Panel' && f !== 'User Management'));
  }


}


