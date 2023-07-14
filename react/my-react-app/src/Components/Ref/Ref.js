import React, { useRef, useEffect } from "react";
import { RefChild } from "./RefChild";
import RefChildForwarded from "./RefChild";
// import { UseImperativeHandleRef } from "./UseImperativeHandleRef";

export const Ref = () => {
  const ref = useRef < HTMLDivElement > null;

  useEffect(() => {
    console.log("ref:", ref.current); // undefined
  }, []);

  return (
    <div>
      <p>Parent</p>
      <RefChild ref={ref} />
      <RefChildForwarded ref={ref} />
      {/* <UseImperativeHandleRef ref={ref} /> */}
    </div>
  );
};
