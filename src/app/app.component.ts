import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { MyheaderComponent } from './components/shared/myheader/myheader.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyheaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularYetAnotherTaskingDemo';
  users = DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId);
  } 

  onSelectUser(userId: string) {
    console.log('User selected:', userId);
    this.selectedUserId = userId;
  }
}
