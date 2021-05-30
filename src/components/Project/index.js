import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// var projectData = [
//   {
//     title: "Park Buddy 2.0",
//     image: "../images/park2.0list.png",
//     description:
//       "Group project to provide National Park information for the user's current state based on their IP address.",
//     githubLink: "https://brylara.github.io/Project1/",
//     otherLink: "",
//   },

//   {
//     title: "Code Quiz",
//     image: "../images/JSquizScreenshot.png",
//     description: "A timed quiz built with vanilla Javascript",
//     githubLink: "https://b00kbaker.github.io/basicJS-quiz/",
//     otherLink: "",
//   },

//   {
//     title: "Loan Shark",
//     image: "",
//     description:
//       "Group project utilizing React to create a student loan tracker complete with Authentication, database storage, and up-to-date chart graphics.",
//     githubLink: "",
//     otherLink: "",
//   },

//   {
//     title: "Password Generator",
//     image: "../images/PasswordGen.png",
//     description:
//       "Once the user has answered a variety of questions regarding value type (uppercase, lowercase, length, etc) a unique one time password will be generated via Javascript functions.",
//     githubLink: "https://github.com/b00kbaker/generate-new-pswrd.git",
//     otherLink: "https://github.com/b00kbaker/generate-new-pswrd.git",
//   },

//   {
//     title: "Note Taker",
//     image: "",
//     description: "",
//     githubLink: "",
//     otherLink: "",
//   },

//   {
//     title: "Blog Beginnings",
//     image: "",
//     description: "",
//     githubLink: "",
//     otherLink: "",
//   },
// ];

const Project = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src="../images/park2.0list.png" />
            <Card.Body>
              <Card.Title>Park Buddy 2.0</Card.Title>
              <Card.Text>
                Group project to provide National Park information for the
                user's current state based on their IP address.
              </Card.Text>
              <Button
                href="https://brylara.github.io/Project1/"
                variant="outline-primary"
              >
                GitHub Repo
              </Button>
              {/* <Button href='https://shrouded-reaches-33204.herokuapp.com/' variant="outline-danger">View Live Application</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src="../images/JSquizScreenshot.png" />
            <Card.Body>
              <Card.Title>Code quiz</Card.Title>
              <Card.Text>A timed quiz built with vanilla Javascript</Card.Text>
              <Button href="https://github.com/b00kbaker/basicJS-quiz.git">
                GitHub Repo
              </Button>
              <Button href="https://b00kbaker.github.io/basicJS-quiz/">
                Live Application
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Loan Shark</Card.Title>
              <Card.Text>
                Group project utilizing React to create a student loan tracker
                complete with Authentication, database storage, and up-to-date
                chart graphics.
              </Card.Text>
              <Button
                href=""
                variant="outline-primary"
              >
                GitHub Repo
              </Button>
              <Button
                href=""
                variant="outline-danger"
              >
                Live Application
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img
              variant="top"
              src="../images/PasswordGen.png"
            />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
              Once the user has answered a variety of questions regarding value type (uppercase, lowercase, length, etc) a unique one time password will be generated via Javascript functions.
              </Card.Text>
              <Button
                id="githubBtn"
                href="https://github.com/b00kbaker/generate-new-pswrd.git"
                variant="outline-primary"
              >
                GitHub Repo
              </Button>
              <Button
                href="https://b00kbaker.github.io/generate-new-pswrd/"
                variant="outline-danger"
              >
                Live Application
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>
                Coming Soon
              </Card.Text>
              <Button
                href=""
                variant="outline-primary"
              >
                GitHub Repo
              </Button>
              <Button
                href=""
                variant="outline-danger"
              >
                Live Application
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Blog Beginnings</Card.Title>
              <Card.Text>
                Coming Soon
              </Card.Text>
              <Button
                href=""
                variant="outline-primary"
              >
                GitHub Repo
              </Button>
              <Button
                href=""
                variant="outline-danger"
              >
                Live Application
              </Button>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default Project;
