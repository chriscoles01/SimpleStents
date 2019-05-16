import React from "react";
import { Route, Switch } from "react-router-dom";
import Kidney from "./Components/Kidney.js";
import Home from "./Components/Home.js"
export default () =>
  <Switch>
    <Route path="/kidney" exact component={Kidney} />
    <Route path="/" exact component={Home} />

  </Switch>;