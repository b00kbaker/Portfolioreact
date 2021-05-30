import React from "react";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return(
    <Container fluid>
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </Router>
    </Container>
  );
}

export default App;
