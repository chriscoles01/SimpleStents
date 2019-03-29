import React from "react";
import { Route, Switch } from "react-router-dom";
import Kidney from "./Components/Kidney.js";
import Home from "./Components/Home.js"
import pyp from "./Components/Paintyourpain.js"
export default () =>
  <Switch>
    <Route path="/paintyourpain" exact component={pyp} />
    <Route path="/kidney" exact component={Kidney} />
    <Route path="/" exact component={Home} />

  </Switch>;