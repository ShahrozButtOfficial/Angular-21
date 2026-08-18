import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    getUser(){
        return this.http.get<User[]>(this.apiUrl);
    }
}