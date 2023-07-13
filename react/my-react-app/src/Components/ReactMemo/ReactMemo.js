import React, { useState } from "react";

export const ReactMemo = (props) => {
  const [ticks, setTicks] = React.useState(0);
  const tickRef = React.useRef();
  tickRef.current = ticks;
  const [clicks, setClicks] = React.useState(0);

  setTimeout(() => setTicks(ticks + 1), 500);
  return (
    <div>
      <h2>
        Parent Rendered at tick {tickRef.current} with clicks {clicks}.
      </h2>
      <button onClick={() => setClicks(clicks + 1)}>Add extra click</button>
      <Child tickRef={tickRef} clicks={clicks} />
      <MemoChild tickRef={tickRef} clicks={clicks} />
    </div>
  );
};

const Child = ({ tickRef, clicks }) => (
  <p>
    Child Rendered at tick {tickRef.current} with clicks {clicks}.
  </p>
);

const MemoChild = React.memo(Child);
