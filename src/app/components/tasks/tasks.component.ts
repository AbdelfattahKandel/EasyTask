import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddTaskPopupComponent } from './add-task/add-task-popup.component';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent, AddTaskPopupComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [TaskService]
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input() userId!: string;

  showAddPopup = false;

  constructor(private taskService: TaskService) {}

  get tasks(): Task[] {
    return this.taskService.getTasksByUser(this.userId);
  }

  onDeleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  onCompleteTask(taskId: string) {
    // هنا يمكنك تنفيذ منطق إكمال المهمة مثل تغيير حالة المهمة أو إظهار رسالة
    alert('Task completed: ' + taskId);
  }

  onAddTask() {
    this.showAddPopup = true;
  }

  onAddTaskPopup(data: any) {
    this.showAddPopup = false;
    if (data) {
      // إضافة المهمة فعلياً
      this.taskService.addTask({
        id: Math.random().toString(36).slice(2),
        userId: this.userId,
        title: data.title,
        summary: data.summary,
        dueDate: data.dueDate
      });
    }
  }
}
