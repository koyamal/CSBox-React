import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  console.log("Child Area is Rendered");
  const { open } = props;
  return (
    <>
      {open && (
        <div style={style}>
          <p>Child Component</p>
        </div>
      )}
    </>
  );
});
