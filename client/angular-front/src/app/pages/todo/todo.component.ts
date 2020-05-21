import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.todoservice.getAll().subscribe((res) => {
      console.log("res", res);
      this.todos = res.todos;
    });
  }

  onAdd({ todo }) {
    this.todos.push(todo);
  }

  onDelete({ todo: { _id } }) {
    this.todos = this.todos.filter((todo) => todo._id !== _id);
  }

  onChange({ todo: { _id, title, completed } }) {
    this.todos = this.todos.map((todo) => {
      if (todo._id === _id) {
        todo.completed = completed;
        todo.title = title;
        console.log("todo", todo);
      }
      return todo;
    });
  }
}
