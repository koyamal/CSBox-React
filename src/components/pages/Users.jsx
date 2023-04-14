import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/RUgbGfdma6U",
    name: `Tom-${val}`,
    email: "abcabc@example.com",
    phone: "123-4567-8910",
    company: {
      name: "XXXXX Corporation"
    },
    website: "YYYYY.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>Users List</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} isAdmin={isAdmin} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
