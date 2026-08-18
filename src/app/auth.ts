import { Injectable , signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
    isLoggedIn = signal<boolean>(false);


    login(){
        this.isLoggedIn.set(true);
    }

    logout(){
        this.isLoggedIn.set(false);
    }
}