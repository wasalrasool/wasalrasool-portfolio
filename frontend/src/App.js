import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
