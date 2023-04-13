import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <p>- Styled Components -</p>
      <Button>FIGHT!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 10px;
`;

const Button = styled.button`
  color: red;
`;
