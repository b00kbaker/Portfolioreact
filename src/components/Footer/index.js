import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";



const Footer = () => {
  return (
    <Container>
  <div className="footer">
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
        <Button
               variant="primary"
               size="sm"
               href="https://www.linkedin.com/in/caitlin-murphy-080797194/">
                Follow me on LinkedIn
              </Button>
        </span>
      </div>
    </footer>
  </div>
  </Container>
   
  );
};

export default Footer;
