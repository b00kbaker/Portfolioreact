import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../components/Project";

const Portfolio = () => {
    return (
        <div>
        <Container fluid>
        {/* Need to pass props to individualize Project blocks */}
        <Project />
     </Container>
    </div>
    );
};


export default Portfolio;