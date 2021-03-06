import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Help, About, MainApp, Materi } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/materi">
          <Materi />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
