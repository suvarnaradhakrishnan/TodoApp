import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  newTodo = { task: '', dueDate: '', priority: 'Medium' };

  onSubmit() {

    
  }
}
