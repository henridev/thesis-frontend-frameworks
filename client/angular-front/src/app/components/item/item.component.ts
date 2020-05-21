import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "../../services/todo.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  @Input("todo") todo: Todo;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  isEdit = false;
  title = new FormControl("");

  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {}

  setEdit() {
    this.isEdit = !this.isEdit;
  }

  handleStatusChange() {
    this.todoservice
      .update(this.todo._id, !this.todo.completed, "")
      .subscribe((res) => {
        console.log("res", res);
        this.change.emit(res);
      });
  }

  handleTitleChange() {
    this.todoservice
      .update(this.todo._id, "", this.title.value)
      .subscribe((res) => {
        this.change.emit(res);
        this.isEdit = false;
      });
  }

  handleDelete() {
    this.todoservice.delete(this.todo._id).subscribe((res) => {
      console.log("res", res);
      this.delete.emit(res);
    });
  }
}
