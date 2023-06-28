import React, { useEffect, useLayoutEffect } from "react";

export const UseLayoutEffectTest = () => {
  useLayoutEffect(() => console.log("useLayoutEffect"), []);

  useEffect(() => console.log("useEffect"), []);
  return <div></div>;
};
