import React from "react";
import { Route, Switch } from "react-router-dom";
import Kidney from "./Components/Kidney.js";

export default () =>
  <Switch>
    <Route path="/kidney" exact component={Kidney} />
  </Switch>;