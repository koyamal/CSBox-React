import React from "react";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import "./styles.css";

export const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
