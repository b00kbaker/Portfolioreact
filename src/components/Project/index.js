import React from "react";
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

var projectData=[
  {
    title:
    image:
    description:
    githubLink:
    otherLink:
  },

  {
    title:
    image:
    description:
    githubLink:
    otherLink:
  },

  {
    title:
    image:
    description:
    githubLink:
    otherLink:
  },

  {
    title:
    image:
    description:
    githubLink:
    otherLink:
  },

  {
    title:
    image:
    description:
    githubLink:
    otherLink:
  },

  {
    title:
    image:
    description:
    githubLink:
    otherLink:
  },
];


function Project(){
  return(

 <div className="container" id="folio-grid">
      <div className="row">
          <div className="card">
            <img

            // Props (image/alt/title/href)
              src="../images/ParkBuddyScreenShot02.21.png"
              className="card-img-top"
              alt="Background of Zion National Park sign with logo 'ParkBuddy' overlay"
            />
            <div className="card-body">
              <p className="card-text">Group Project: <a href="https://brylara.github.io/Project1/">ParkBuddy</a></p>
            </div>
          </div>  
      </div>
 </div>     
  );
};

export default Project;