import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title = "ToDo";
  todos = TODOS;
  constructor() { }

  ngOnInit() {
  }

}
