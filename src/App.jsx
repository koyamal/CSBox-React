/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("Top of App");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue" message="Good" />
      <ColorfulMessage color="pink" message="Bad" />
      <ColorfulMessage color="red" message="Good" />
      <button onClick={onClickCountUp}>Up</button>
      <p>{num}</p>
      <button onClick={onClickShowFlag}>ON/OFF</button>

      {faceShowFlag && <p>^-^</p>}
    </React.Fragment>
  );
};

export default App;
