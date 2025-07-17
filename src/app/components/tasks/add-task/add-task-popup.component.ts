import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-popup.component.html',
  styleUrl: './add-task-popup.component.css'
})
export class AddTaskPopupComponent {
  @Input() userId!: string;
  @Output() addTask = new EventEmitter<{title: string, summary: string, dueDate: string}>();
  title = '';
  summary = '';
  dueDate = '';

  onSubmit() {
    this.addTask.emit({ title: this.title, summary: this.summary, dueDate: this.dueDate });
  }
  onClose() {
    this.addTask.emit(undefined);
  }
}
