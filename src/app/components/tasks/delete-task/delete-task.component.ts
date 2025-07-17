import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css'
})
export class DeleteTaskComponent {
  @Input() taskId!: string;
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.taskId);
  }
}
