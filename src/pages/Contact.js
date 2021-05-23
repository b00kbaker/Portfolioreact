import React from "react";
import { Navbar } from "../components/Navbar";


const Contact = () => {
    return (
        <Container fluid>
        <Navbar />
        <div className="container font" id="lgFont">
        <p className="left">View code at my
           <a href="https://github.com/b00kbaker">Github</a> account
        </p>
        <p className="left">Contact me via
          <a href="caimmurphy@gmail.com">email</a>
       </p>
        <p className="left">Learn more about my career history at
        <a href="https://www.linkedin.com/in/caitlin-murphy-080797194/">LinkedIn</a> 
       </p>
        <p className="left">My current
        <a href="https://docs.google.com/document/d/19WUbjhSYc6YKbP9rmC3ghJGhzQ03ea45_2wPdISilJg/edit?usp=sharing">2021 Resume</a> 
       </p>
         
      </div>
     </Container>

    );
};


export default Contact;