import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() items;

eddd = '';
  constructor() { }

  ngOnInit() {
  }
  delete(index) {
    this.items.splice(index,1)
  }
edit(index){
    if (this.eddd !== "") {
      this.items.splice(index, 1, this.eddd)
    }
}
// delete(item) {
//     for (let i=0; i < this.items.length; i++){
//       if (item == this.items[i]){
//         this.items.splice(i,1);
//       }
//     }
// }

}
