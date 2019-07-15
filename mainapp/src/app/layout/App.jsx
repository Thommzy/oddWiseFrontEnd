import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "../../Features/Home/Home";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route component={Home} />
      </Fragment>
    );
  }
}
