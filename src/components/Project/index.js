import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Buddy from "../../images/park2.0list.png";
import Quiz from "../../images/JSquizScreenshot.png";
import Password from "../../images/PasswordGen.png";

const Project = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src={ Buddy } />
            <Card.Body>
              <Card.Title>Park Buddy 2.0</Card.Title>
              <Card.Text>
                Group project to provide National Park information for the
                user's current state based on their IP address.
              </Card.Text>
              <Button
               variant="primary"
               href="https://brylara.github.io/Project1/">
                Live Application
              </Button>
              {/* <Button
                href=""
                variant="outline-danger"
              >
                Live Application
              </Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img variant="top" src={ Quiz } />
            <Card.Body>
              <Card.Title>Code quiz</Card.Title>
              <Card.Text>A timed quiz built with vanilla Javascript</Card.Text>
              <Button 
              variant="success"
              href="https://github.com/b00kbaker/basicJS-quiz.git">
                GitHub Repo
              </Button>
              <Button 
              variant="primary"
              href="https://b00kbaker.github.io/basicJS-quiz/">
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
                variant="success"
              >
                GitHub Repo
              </Button>
              <Button
                href=""
                variant="primary"
              >
                Live Application
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "fluid" }}>
            <Card.Img
              variant="top"
              src={ Password }
            />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
              Once the user has answered a variety of questions regarding value type (uppercase, lowercase, length, etc) a unique one time password will be generated via Javascript functions.
              </Card.Text>
              <Button
                href="https://github.com/b00kbaker/generate-new-pswrd.git"
                variant="success"
              >
                GitHub Repo
              </Button>
              <Button
                href="https://b00kbaker.github.io/generate-new-pswrd/"
                variant="primary"
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
                variant="success"
              >
                GitHub Repo
              </Button>
              <Button
                href=""
                variant="primary"
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
                variant="success"
              >
                GitHub Repo
              </Button>
              <Button
                href=""
                variant="primary"
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
