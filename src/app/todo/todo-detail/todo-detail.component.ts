import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/Todo";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input()
  todoDetail!: Todo;

  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.remove.emit(this.todoDetail);
  }

  updateTodo() {
    this.todoService.updateTodo(this.todoDetail).subscribe();
  }
}
