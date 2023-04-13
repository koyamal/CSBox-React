import React from "react";
import "./styles.css";

import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
};
