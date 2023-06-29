import React, { useContext } from "react";
import { AppContext } from "./UseContextTest";

const Login = (props) => {
  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUserName(event.target?.value)}
      ></input>

      {/* <input
        onChange={(event) => props?.setUserName(event.target?.value)}
      ></input> */}
    </div>
  );
};

export default Login;
