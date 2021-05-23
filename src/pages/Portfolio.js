import React from "react";
import { Navbar } from "../components/Navbar";
import { Project } from "../components/Project";

const Portfolio = () => {
    return (
        <Container fluid>
        <Navbar />
        {/* Need to pass props to individualize Project blocks */}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
     </Container>

    );
};


export default Portfolio;