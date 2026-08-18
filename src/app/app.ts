import { Component, inject, signal } from '@angular/core';
import { UserService } from './services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
  // private userService = inject(UserService);

  // users = signal<any[]>([]);

  // loadUsers() {
  //   this.userService.getUsers().subscribe({
  //     next: (data) => {
  //       console.log('Data received:', data);
  //       this.users.set(data);
  //     },
  //     error: (error) => {
  //       console.error('Error:', error);
  //     }
  //   });
  // }


    // userservice = inject(UserService);
    // users: any = toSignal(this.userservice.getUsers(), { initialValue: [] });
    
    
    userService = inject(UserService);
    users:any = toSignal<User[]>(this.userService.getUser());
}
