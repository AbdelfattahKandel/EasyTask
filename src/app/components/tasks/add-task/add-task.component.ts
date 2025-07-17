import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<void>();

  onAdd() {
    this.add.emit();
  }
}
