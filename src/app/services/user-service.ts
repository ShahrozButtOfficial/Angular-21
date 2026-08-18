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

    //GET
    getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    //POST
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    //PUT
    updateUser(id: number, user: User) : Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/${id}`, user);
    }

    //PATCH
    updateUserStatus(id: number, isActive: boolean): Observable<User> {
        return this.http.patch<User>(`${this.apiUrl}/${id}`, { isActive });
    }
}