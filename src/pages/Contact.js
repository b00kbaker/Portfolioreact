import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


const Contact = () => {
    return (
        <div>
          <h2>
        <Container fluid>
        <div className="container font" id="lgFont">
        <p className="left">View code at my Github account: https://github.com/b00kbaker
        </p>
        <p className="left">Contact me via
          email: caimmurphy@gmail.com
       </p>
        <p className="left">Learn more about my career history at:   
        <Button
               variant="primary"
               size="sm"
               href="https://www.linkedin.com/in/caitlin-murphy-080797194/">
                LinkedIn
              </Button>
       </p>
        <p className="left">My current:    
        <Button
               variant="primary"
               size="sm"
               href="https://docs.google.com/document/d/19WUbjhSYc6YKbP9rmC3ghJGhzQ03ea45_2wPdISilJg/edit?usp=sharing">
                2021 Resume
              </Button>
       
       </p>
         
      </div>

    </Container>
       </h2>
      </div>

    );
};


export default Contact;