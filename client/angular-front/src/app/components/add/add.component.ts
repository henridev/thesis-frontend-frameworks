import { Component, Output, EventEmitter } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent {
  todo = new FormControl("");
  @Output() add: EventEmitter<any> = new EventEmitter();
  constructor(private todoservice: TodoService) {}

  addTodo() {
    console.log("creating", this.todo.value);
    this.todoservice.create(this.todo.value, false).subscribe((res) => {
      this.add.emit(res);
    });
    console.log("done");
  }
}
