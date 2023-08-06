import { Component } from '@angular/core';
import { Todos } from 'src/app/models/tomodel';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todos[]=[];

  constructor(private todoservice:TodoService) {}

  ngOnInit(): void {
    this.todoservice.getAllTodos()
    .subscribe({
      next: (todos)=>{
        this.todos=todos
      }
    });
  }


  deleteTodo(todo: any) {
    
  }
}
