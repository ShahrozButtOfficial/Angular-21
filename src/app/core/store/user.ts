import {Injectable ,signal} from '@angular/core';

interface User {
    name: string;
    role: 'user' | 'admin';
}

@Injectable({
    providedIn: 'root',
})

export class UserStore {
    user = signal<User | null>(null);

    login(name: string, role: 'user' | 'admin') {
        this.user.set({ name, role });
    }

    logout(){
        this.user.set(null);
    }


    isAdmin(){
        return this.user()?.role === 'admin';
    }
}