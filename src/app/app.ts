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


  // userService = inject(UserService);
  // users:any = toSignal<User[]>(this.userService.getUser());

  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');
  editingUpdateID = signal<number | null>(null);


  constructor(private userService: UserService) { }

  // ngOnInit(){
  //     this.userService.getUser().subscribe((data) => {
  //         this.users = data;
  //     } );
  // }

  ngOnInit() {
    this.loadUsers();
  }


  loadUsers() {
    this.userService.getUser().subscribe((data) => {
      this.users.set(data);
    });
  }

  editUser(user: User) {
    this.editingUpdateID.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }


  //Add and update user
  submitForm() {
    const payload: User = {
      name: this.name(),
      email: this.email(),
      isActive: false
    };
    //update user
    if (this.editingUpdateID() !== null) {
      this.userService.updateUser(this.editingUpdateID()!, payload).subscribe((data) => {
        alert('User updated successfully');
        this.afterSave();
      })
    } else {
      this.userService.addUser(payload).subscribe((data) => {
        this.loadUsers(); // Refresh the user list after adding a new user
        this.afterSave();
      });
    }

  }

  toggleUserStatus(user: User) {
    this.userService.updateUserStatus(user.id!, !user.isActive).subscribe(() => {
      this.users.update( list => 
        list.map(u=>
          u.id === user.id ? { ...u, isActive: !u.isActive } : u
        )
      )
    });
  }

  deleteUser(user : User) {
    const confirmDelete = confirm(`Are you sure you want to delete ${user.name}?`);
    if(!confirmDelete) {
      return;
    }

    this.userService.deleteUser(user.id!).subscribe(() => {
      this.users.update(list => list.filter(u => u.id !== user.id));
    });
  }

  afterSave() {
    this.loadUsers(); // Refresh the user list after adding a new user
    this.name.set('');
    this.email.set('');
    this.editingUpdateID.set(null)
  }

}
