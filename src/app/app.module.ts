import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './Services/user-list/user-list.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './Services/users.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    UsersComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UsersService],
})
export class AppModule {}
