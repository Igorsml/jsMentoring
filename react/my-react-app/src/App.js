import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { Counter } from "./Components/Counter/Counter";
import { Todo } from "./Components/Todo/Todo";
import { Timer } from "./Components/Timer/Timer";
import { UseStateTest } from "./Components/UseStateTest/UseStateTest";
import { UseReducerTest } from "./Components/UseReducerTest/UseReducerTest";
import { UseEffectTest } from "./Components/UseEffectTest/UseEffectTest";
import { UseRefTest } from "./Components/UseRefTest/UseRefTest";
import { UseLayoutEffectTest } from "./Components/UseLayoutEffectTest/UseLayoutEffectTest";
import { UseContextTest } from "./Components/UseContextTest/UseContextTest";
import { ReactMemo } from "./Components/ReactMemo/ReactMemo";
import { BoxChildren } from "./Components/Children/Box.tsx";
import { Button } from "./Components/Children/Button.tsx";
import { Ref } from "./Components/Ref/Ref";
import { UseImperativeHandleRef } from "./Components/Ref/UseImperativeHandleRef";
import PortalModal from "./Components/PortalModal/PortalModal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setOpen(true)}> Open / Close</button>
        <PortalModal open={open} onClose={() => setOpen(false)}>
          Zopa
        </PortalModal>
        <hr />
        <UseImperativeHandleRef />
        <hr />
        <Ref />
        <hr />
        <ReactMemo />
        <hr />
        <BoxChildren />
        <hr />

        {/* <Button /> */}
        {/* <UseStateTest />
        <hr />
        <UseRefTest />
        <hr />
        <UseReducerTest />
        <hr />
        <UseEffectTest />
        <hr />
        <UseLayoutEffectTest />
        <hr />
        <UseContextTest />
        <hr />
        <Timer />
        <hr />
        <Counter />
        <hr />
        <Todo />
        <hr /> */}
      </header>
    </div>
  );
}

export default App;
