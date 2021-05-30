import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../components/Project";

const Portfolio = () => {
    return (
        <div>
            <h4>
        <Container fluid>
        {/* Need to pass props to individualize Project blocks */}
        <Project />
     </Container>
       </h4>
    </div>
    );
};


export default Portfolio;