import { Component, inject, signal } from '@angular/core';
import { UserService } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
  private userService = inject(UserService);

  users = signal<any[]>([]);

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.users.set(data);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
