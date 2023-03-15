import React from "react";
import "./App.css";
import "./index.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Todo/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter:</h2>
        <Counter />
        <h2>Todo:</h2>
        <Todo />
      </header>
    </div>
  );
}

export default App;
