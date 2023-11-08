import React, { useState } from "react";

export const UseStateTest = () => {
  const [inputValue, SetInputValue] = useState("Abob");

  let onChange = (event) => {
    const newValue = event.target.value;
    SetInputValue(newValue);
  };

  return (
    <div>
      <h2>useState</h2>
      <input type="text" laceholder="just typing" onChange={onChange} />
      <div>{inputValue}</div>
    </div>
  );
};
