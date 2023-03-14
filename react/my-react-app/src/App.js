import React from "react";
import "./App.css";
import "./index.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Todo/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;
