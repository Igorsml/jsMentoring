import React from "react";
import { observer } from "mobx-react-lite";
import todo from "../store/todo";

export const Todo = observer(() => {
  console.log("render");
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>Get todo's</button>
      {todo.todos.map((todoElem) => (
        <div className="todo" key={todoElem.id}>
          <input
            type="checkbox"
            checked={todoElem.completed}
            onChange={() => todo.completeTodo(todoElem.id)}
          />
          {todoElem.title}
          <button onClick={() => todo.removeTodo(todoElem.id)}>X</button>
        </div>
      ))}
    </div>
  );
});
