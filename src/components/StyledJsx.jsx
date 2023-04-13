export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- Styled JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 10px;
        }
        .button {
          color: red;
        }
      `}</style>
    </>
  );
};
