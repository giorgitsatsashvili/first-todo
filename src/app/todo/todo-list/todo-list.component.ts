import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoArray = [];
new = '';
  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.new !== '') {
      this.todoArray.push(this.new);
    }
  }

}
