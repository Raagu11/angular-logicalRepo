import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userdata: any = [];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe((res) => {
      this.userdata = res;
      console.log(res);
    });
  }
}
