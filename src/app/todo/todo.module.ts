import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TodoCreateComponent } from './todo-create/todo-create.component';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoDetailComponent,
        TodoCreateComponent,
    ],
  exports: [
    TodoDetailComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TodoModule { }
