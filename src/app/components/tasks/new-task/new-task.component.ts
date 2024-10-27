import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task } from '../../../models/task'; // Ensure Task is a class that can be instantiated
import { User } from '../../../models/user';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  //Use the follwoing line to inject the TasksService
  //or the constructor can be used to inject the TasksService
  private tasksService = inject(TasksService);

  @Input({required: true}) user!: User;
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<Task>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  // The above as signals
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  //constructor(private tasksService:TasksService) {}

  onCancel() {
    console.log('Task creation cancelled');
    this.cancel.emit();
  }

  onSubmit() {
    console.log('Task created:', this.enteredTitle, this.enteredSummary, this.enteredDueDate);
    const task: Task = {
      id: Math.random().toString(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
      userId: this.user.id,
    }; 
    // this.create.emit(task);
    this.tasksService.createTask(task);
    this.cancel.emit();
  }

}
