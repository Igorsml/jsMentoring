import React, { useContext } from "react";
import { AppContext } from "./UseContextTest";

const User = (props) => {
  const { userName } = useContext(AppContext);

  return (
    <div>
      <h1>User: {userName}</h1>

      {/* <h1>User: {props?.userName}</h1> */}
    </div>
  );
};

export default User;
