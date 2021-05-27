import "./App.css";
import React, { useState } from "react";
import Greet from "./Pages/Greet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home";
import RenderArrays from "./Pages/RenderArrays";
import ReuseableComponents from "./Pages/ReuseableComponents";
import List from "./Pages/List";

const App = () => {
  return (
    <>
      {/* <h1 className="my-header">Welcome to my page</h1> */}
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counter/:name" component={Counter} />
          <Route exact path="/arrays" component={RenderArrays} />
          <Route exact path="/reuseables" component={ReuseableComponents} />
          <Route exact path="/list" component={List} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
