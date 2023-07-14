import React, { useRef, useEffect } from "react";
import { RefChild } from "./RefChild";
import RefChildForwarded from "./RefChild";
// import { UseImperativeHandleRef } from "./UseImperativeHandleRef";

export const Ref = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("ref:", ref.current); // undefined если без forwardRef и Hello, Aboba forwardRef> если c
  }, []);

  return (
    <div>
      <h1>Ref</h1>
      <RefChild ref={ref} />
      <RefChildForwarded ref={ref} />
    </div>
  );
};
