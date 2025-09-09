import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { todo } from './todo';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todo-app');

  todoValue!: string;
  list!: todo[];

  ngOnInit() {
    this.todoValue = '';
    this.list = [];
  }

  addTodo() {
    if (this.todoValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newTodo);
    }
    this.todoValue = ' ';
  }

  deleteTodo(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
