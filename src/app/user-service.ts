import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    getUser(){
        return this.http.get(this.apiUrl);
    }
}