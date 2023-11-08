import React, { useEffect, useState } from "react";
import axios from "axios";

export const UseEffectTest = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response?.data[0]);
        console.log(response?.data[0]?.email);
        console.log("API WAS CALLED"); // 2 calls
      });
  }, []); // 1 call

  return (
    <>
      <h2>useEffect</h2>
      <div>Email {data?.email}</div>
    </>
  );
};
