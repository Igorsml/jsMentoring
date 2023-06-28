import React from "react";
import "./App.css";
import "./index.css";
import { Counter } from "./Components/Counter/Counter";
import { Todo } from "./Components/Todo/Todo";
import { Timer } from "./Components/Timer/Timer";
import { Input } from "./Components/Input/Input";
import { UseReducerTest } from "./Components/UseReducerTest/UseReducerTest";
import { UseEffectTest } from "./Components/UseEffectTest/UseEffectTest";
import { UseRefTest } from "./Components/UseRefTest/UseRefTest";
import { UseLayoutEffectTest } from "./Components/UseLayoutEffectTest/UseLayoutEffectTest";
import { UseContextTest } from "./Components/UseContextTest/UseContextTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Timer />
        <Input />
        <UseReducerTest />
        <UseEffectTest />
        <UseRefTest />
        <UseLayoutEffectTest />
        <UseContextTest />
        <Todo />
      </header>
    </div>
  );
}

export default App;
