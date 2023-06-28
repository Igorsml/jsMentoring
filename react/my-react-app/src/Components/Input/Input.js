import React, { useState } from "react";

export const Input = () => {
  const [inputValue, SetInputValue] = useState("Abob");

  let onChange = (event) => {
    const newValue = event.target.value;
    SetInputValue(newValue);
  };

  return (
    <div>
      <h2>Input. useState</h2>
      <input placeholder="just typing" onChange={onChange} />
      <div>{inputValue}</div>
    </div>
  );
};
