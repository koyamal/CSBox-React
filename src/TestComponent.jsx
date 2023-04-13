import { useState } from "react";

export const TestComponent = () => {
  const [count, setCount] = useState(0);
  const onClickHelloWorld = () => {
    console.log("Hello, World.");
    setCount(count + 1);
  };
  return (
    <>
      <p>Hello, World.</p>
      <button onClick={onClickHelloWorld}>Hello World</button>
      <p>{count}</p>
    </>
  );
};
