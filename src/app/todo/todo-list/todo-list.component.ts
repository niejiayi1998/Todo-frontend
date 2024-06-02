import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/Todo";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos!: Todo[]
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(newTodo: string): void {
    if (newTodo.trim()) {
      const todo: Todo = {id: 0, description: newTodo, completed: false};
      this.todoService.addTodo(todo).subscribe(res => {
        this.todos.push(res);
      });
    }
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    })

  }

}
