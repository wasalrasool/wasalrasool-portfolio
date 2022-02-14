import React from "react";
import "./App.css";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer.js";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
