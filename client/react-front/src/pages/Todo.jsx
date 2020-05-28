import React, { useState, useEffect } from "react";
import "../styles/todo.css";
import api from "../api/todo";
import Add from "../components/Add";
import Item from "../components/Item";

export default function Todo({ username }) {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    const res = api.getAll().then((_todos) => {
      console.log("_todos", _todos);
      settodos(_todos.todos);
    });

    return () => {};
  }, []);

  function handleDelete(id) {
    console.log("id", id);
    api.delete(id).then((res) => {
      console.log("delete done", res);
      settodos(todos.filter((todo) => todo._id !== id));
    });
  }

  function handleStatusChange(id, status) {
    settodos(
      todos.map((todo) => {
        if (todo._id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
    api.update(id, status, "").then((res) => {
      console.log("status change done", res);
    });
  }

  function handleTitleChange(id, title) {
    settodos(
      todos.map((todo) => {
        if (todo._id === id) todo.title = title;
        return todo;
      })
    );
    api.update(id, "", title).then((res) => {
      console.log("title change done", res);
    });
  }

  function handleCreation(title) {
    api.create(title).then((res) => {
      const newest = [...todos];
      newest.push(res);
      settodos(newest);
    });
  }

  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-header background-image"></div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item active">
            Hello {username} these are your todos for today
          </li>
          <span className="todo-items">
            {todos.map((todo) => {
              return (
                <Item
                  key={todo._id}
                  id={todo._id}
                  isComplete={todo.completed}
                  title={todo.title}
                  handleDelete={handleDelete}
                  handleStatusChange={handleStatusChange}
                  handleTitleChange={handleTitleChange}
                />
              );
            })}
          </span>
          <Add handleCreation={handleCreation} />
        </ul>
      </div>
    </div>
  );
}
