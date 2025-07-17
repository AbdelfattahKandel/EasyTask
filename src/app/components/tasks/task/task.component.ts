import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DeleteTaskComponent } from '../delete-task/delete-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DeleteTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: any;
  @Output() complete = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  get title() {
    return this.task?.title || '';
  }
  get summary() {
    return this.task?.summary || '';
  }
  get dueDate() {
    return this.task?.dueDate || '';
  }
  get id() {
    return this.task?.id || '';
  }

  onComplete() {
    this.complete.emit(this.id);
  }

  onDeleteTask(id: string) {
    this.delete.emit(id);
  }
}
