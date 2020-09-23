import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default Routes => (
  <BrowserRouter>
    <Route render={props => <Home {...props} />} path="/" exact />

    <Route render={props => <Contact {...props} />} path="/contact" />
  </BrowserRouter>
);
