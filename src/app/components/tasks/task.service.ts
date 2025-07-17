import { Injectable } from '@angular/core';
import { Task } from '../../../model/task.model';
import { dummyTasks } from '../../../dummy-tasks';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'tasks';
  private tasks: Task[] = this.loadTasks();

  private loadTasks(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return [...dummyTasks];
      }
    }
    return [...dummyTasks];
  }

  private saveTasks() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  getTasksByUser(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }
}
