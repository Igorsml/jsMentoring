import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null);

export const UseContextTest = () => {
  const [userName, setUserName] = useState("");

  // if have mnogo useState's

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <h2>UseContext</h2>
      <Login />
      <User />

      {/* prev:
       <Login setUserName={setUserName} />
      <User userName={userName} /> */}
    </AppContext.Provider>
  );
};
