import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../Services/user-list/userinterface';

@Injectable()
export class UsersService {
  endpoint: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    let options = {};
    return this.http.get<UserInterface[]>(this.endpoint, options);
  }
}
