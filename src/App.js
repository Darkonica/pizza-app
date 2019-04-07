import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Page404 from "./components/pages/Page404/Page404";

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route component={Page404} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Index;
