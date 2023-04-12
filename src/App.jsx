import React, { useState } from "react";
import "./styles.css";
import { ChildArea } from "./components/ChildArea";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Display</button>
      <ChildArea open={open} />
    </div>
  );
};
