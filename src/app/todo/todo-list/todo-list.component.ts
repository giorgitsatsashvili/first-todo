import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoArray = [];
  val;
  constructor() { }

  ngOnInit() {
  }

  add(value) {
    if (value !== '') {
      this.todoArray.push(value);
    }
  }

  delete (i) {
    this.todoArray.splice(i,1)
  }


edit (event,i) {
    this.val = event;
    this.todoArray.splice(i,1,this.val)
}

}


