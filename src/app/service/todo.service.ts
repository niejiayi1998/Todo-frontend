import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/Todo";

const TODO_API = "http://localhost:8080/api/todos"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TODO_API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(TODO_API, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${TODO_API}/${id}`);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${TODO_API}/${todo.id}`, todo);
  }
}
