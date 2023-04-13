export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    padding: "8px"
  };
  const titleStyle = {
    fontSize: "20px"
  };
  const buttonStyle = {
    color: "red"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
