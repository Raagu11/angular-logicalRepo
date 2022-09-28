import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  endpoint: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    let options = {};
    return this.http.get<any[]>(this.endpoint, options);
  }
}
