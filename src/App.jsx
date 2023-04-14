import React from "react";
import { Router } from "./router/Router";
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
  return <Router />;
};
