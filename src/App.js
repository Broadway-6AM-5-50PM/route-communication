import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Greet from "./Greet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import RenderArrays from "./RenderArrays";

const App = () => {
  return (
    <>
      <h1>Welcome to my page</h1>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counter/:name" component={Counter} />
          <Route exact path="/arrays" component={RenderArrays} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
