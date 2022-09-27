import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  endpoint: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    let options = {};
    return this.http.get(this.endpoint, options);
  }
}
