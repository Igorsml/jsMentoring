import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { showText: !state.showText };
    default:
      return state;
  }
};

export const UseReducerTest = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      {/* <h2>{count}</h2> */}
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};
