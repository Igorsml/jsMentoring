import React from "react";
import { observer } from "mobx-react-lite";
import todo from "../store/todo";
import css from "./Todo.module.css";

export const Todo = observer(() => {
  console.log("render");
  return (
    <div>
      <button className={css.btn} onClick={() => todo.fetchTodos()}>
        Get todo's
      </button>
      {todo.todos.map((todoElem) => (
        <div className="todo" key={todoElem.id}>
          <input
            className={css.largerCheckbox}
            type="checkbox"
            checked={todoElem.completed}
            onChange={() => todo.completeTodo(todoElem.id)}
          />
          {todoElem.title}
          <button
            className={css.deleteButton}
            onClick={() => todo.removeTodo(todoElem.id)}
          >
            ✗
          </button>
        </div>
      ))}
    </div>
  );
});
