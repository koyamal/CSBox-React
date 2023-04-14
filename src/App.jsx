import React from "react";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/RUgbGfdma6U",
  name: "Tom",
  email: "abcabc@example.com",
  phone: "123-4567-8910",
  company: {
    name: "XXXXX Corporation"
  },
  website: "YYYYY.com"
};

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Test</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
};
