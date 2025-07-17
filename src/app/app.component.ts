import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string ;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onUserSelected(id: string) {
    this.selectedUserId = id;
  }


}
