import React, { forwardRef } from "react";

export const RefChild = (props, { ref }) => {
  console.log("ref props:", props?.ref); // undefined
  return (
    <div ref={ref}>
      <p>Hello, Aboba</p>
      <p>{props?.ref}</p>
    </div>
  );
};

const RefChildForwarded = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <p>Hello, Aboba</p>
    </div>
  );
});

export default RefChildForwarded;
