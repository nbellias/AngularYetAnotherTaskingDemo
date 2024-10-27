import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from '../../../models/task';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  
  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.deleteTask(this.task.id);
  }
}
