import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("Top of Colorful");
  const { color, message } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{message}</p>
    </>
  );
};
