import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/home" component={Home} /> */}
        </Router>
      </div>
    );
  }
}
