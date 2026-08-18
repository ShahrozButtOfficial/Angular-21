import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }
}