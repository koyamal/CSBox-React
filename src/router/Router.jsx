import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { Page2Home } from "../Page2Home";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={(props) => {
          const {
            match: { url }
          } = props;
          return (
            <Switch>
              {page1Routes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
            </Switch>
          );
        }}
      />
      <Route exact path="/page2">
        <Page2 />
      </Route>
      <Route path="/page2/homes">
        <Page2Home />
      </Route>
    </Switch>
  );
};
