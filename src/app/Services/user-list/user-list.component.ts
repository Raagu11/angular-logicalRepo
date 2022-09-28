import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../Services/user-list/userinterface';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userData: UserInterface[] = [];

  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.user.getUsers().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
    });
  }
}
