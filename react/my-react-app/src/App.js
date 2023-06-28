import React from "react";
import "./App.css";
import "./index.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Todo/Todo";
import { Timer } from "./Timer/Timer";
import { Input } from "./Input/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
        <Timer />
        <Input />
      </header>
    </div>
  );
}

export default App;
