import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () => {
    history.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickNormal = () => {
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };
  return (
    <SContainer>
      <h2>TOP Page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickNormal}>Normal User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
