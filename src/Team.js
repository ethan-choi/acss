import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Card, Image } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import image from './img/avatar.png';
import teamGroup from './img/teamgroup.JPG';
function Team() {
  return (
    <div className="team">
      {/* Navigation */}
      <Navigation> </Navigation>

      {/* Header */}
      <div class="teamHeader">
        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 12 }}>
              <h1 class="animate__animated animate__fadeInDown"> Our 2021 Team</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#dd3438" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,138.7C320,117,400,107,480,101.3C560,96,640,96,720,106.7C800,117,880,139,960,165.3C1040,192,1120,224,1200,208C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>
      {/* Team  */}

      <div class="teamGroupContainer">
        <Container fluid>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <Image src={teamGroup} className="teamGroupImage" fluid />
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,58.7C274.3,43,343,21,411,16C480,11,549,21,617,48C685.7,75,754,117,823,133.3C891.4,149,960,139,1029,133.3C1097.1,128,1166,128,1234,128C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <div class="team-container">
        <Container fluid={true}>
          <Row className="team-row" lg="auto">
            <Col lg={{ span: 2, offset: 2 }} md={{ span: 12 }} sm={{ span: 12, offset: 0 }} className="teamCol">
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Steven Lee </h2></Card.Title>
                  <Card.Text>
                    <h3> President </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Rachel Xu </h2> </Card.Title>
                  <Card.Text>
                    <h3> Vice President </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title> <h2> Lewis Smith </h2> </Card.Title>
                  <Card.Text>
                    <h3> Secretary </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2, offset: 0 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Steven Pang </h2> </Card.Title>
                  <Card.Text>
                    <h3> Treasurer </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="team-row" lg="auto" >
            <Col lg={{ span: 2, offset: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Steven Pang </h2> </Card.Title>
                  <Card.Text>
                    <h3> Treasurer </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Tayla Cheng </h2>
                  </Card.Title>
                  <Card.Text>
                    <h3> Marketing Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Jessie Rentong </h2> </Card.Title>
                  <Card.Text>
                    <h3> Events Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2, offset: 0 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Annie Qi </h2>  </Card.Title>
                  <Card.Text>
                    <h3> Design Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="team-row" lg="auto">
            <Col lg={{ span: 2, offset: 4 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Oliver Wen </h2> </Card.Title>
                  <Card.Text>
                    <h3> Language Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '28vh' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Ethan Choi </h2> </Card.Title>
                  <Card.Text>
                    <h3> Technology Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Team;
