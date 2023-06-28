import React, { useRef } from "react";

export const UseRefTest = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>UseRef</h2>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change name</button>
    </div>
  );
};
