import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  task: string = '';
  todoList: string[] = [];

  addTask(): void {
    if (this.task) {
      this.todoList.push(this.task);
      this.task = '';
    }
  }

  removeTask(index: number): void {
    this.todoList.splice(index, 1);
  }
}
