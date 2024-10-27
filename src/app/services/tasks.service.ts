import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { User } from '../models/user';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];

  constructor() { 
    this.saveTasks();
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  createTask(task: any) {
    this.tasks.push(task);
    this.saveTasks();
  }

  retrieveUserTasks(user: User) {
    return this.tasks.filter((task) => task.userId === user?.id);
  }

  updateTask(taskId: string, task: any) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks[taskIndex] = task;
    this.saveTasks();
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(dummyTasks));
  }
}
