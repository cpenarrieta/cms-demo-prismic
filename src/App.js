import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import AddAddress from "./pages/AddAddress";
import AddEmployee from "./pages/AddEmployee";
import Dashboard from "./pages/Dashboard";
import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { LocaleProvider } from "./components/LocaleContext";

export default function App() {
  const client = new ApolloClient({
    link: PrismicLink({
      uri: "https://cms-demo-gusto.prismic.io/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <LocaleProvider>
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
      </LocaleProvider>
    </ApolloProvider>
  );
}
