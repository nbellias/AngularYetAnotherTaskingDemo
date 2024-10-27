import { Component, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { User } from '../../models/user';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user!: User;
  isAddingTask = false;
  
  constructor(private tasksService: TasksService) {}
  
  get selectedUserTasks() {
    return this.tasksService.retrieveUserTasks(this.user);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
