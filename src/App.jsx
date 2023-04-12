import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const onClickUp = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello</h1>
      <p>{count}</p>
      <button onClick={onClickUp}>Up</button>
    </div>
  );
};
