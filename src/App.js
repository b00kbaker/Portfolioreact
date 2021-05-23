import React from "react";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return(
    <Router>
      <div>
        {/* Data? */}
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
