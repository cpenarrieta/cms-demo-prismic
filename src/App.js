import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import AddAddress from "./pages/AddAddress";
import AddEmployee from "./pages/AddEmployee";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/add-address">
            <AddAddress />
          </Route>
          <Route path="/add-employee">
            <AddEmployee />
          </Route>
          <Route path="/">
            <Dashboard userFirstName="Cristian" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
