import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './header/headers.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../../data/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadersComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = "Essentials";
users = DUMMY_USERS;
selectedUserId: string | undefined;

get selectedUser() {
return this.users.find((user)=>user.id === this.selectedUserId);
}


onSelect(id: string){
  this.selectedUserId = id;
}
}
