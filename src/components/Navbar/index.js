import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";


function Mynavbar() {
  return (
    <Container fluid>
   <h2>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Caitlin Murphy</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
       </Nav>
      </Navbar>
      </h2>



      </Container>
  );
}


export default Mynavbar;