import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickNormal = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
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
