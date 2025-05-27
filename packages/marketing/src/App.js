import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default () => {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
