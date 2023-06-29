import React, { useEffect, useLayoutEffect, useRef } from "react";

export const UseLayoutEffectTest = () => {
  const inputRef = useRef(null);

  useEffect(() => (inputRef.current.value = "Test"), []); // 2

  useLayoutEffect(() => inputRef.current.value, []); // 1
  return (
    // useLayoutEffect(() => (inputRef.current.value = "Test 1st"), []); // 1
    <div>
      <h2>UseLayoutEffect</h2>
      <input type="text" ref={inputRef} value="Baobab" />
    </div>
  );
};
