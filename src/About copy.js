import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Image, Tab, Tabs, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import welcome from './img/welcome.jpg';
import image from './img/avatar.png';
import logo from './img/make-friends.png';


function About() {
  return (
    <div className="about">
      {/* Navigation bar */}
      <Navigation> </Navigation>

      {/* Header */}
      <div class="teamHeader">
        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 12 }}>
              <h1 class="animate__animated animate__fadeInDown"> About </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Who is ACSS? */}

      {/* Benefits */}
      <div class="benefitsContainer">
        <h1> Who is ACSS? </h1>
        <Container fluid>
          <Row>
            <Col lg={{ span: 6, offset: 3 }} sm={{ span: 12, offset: 0 }}>
              <div class="whoContainer-col">
                <p>
                  Australian Chinese Student Society (ACSS) believe that an understanding of another persons culture is the key to their heart. At ACSS, our mission is to encourage the interaction and unity between international and domestic Chinese Students through the exploration of Chinese culture. </p>
                <p> From students that have tasted the exquisite Chinese cuisine, to students that want to dive into the complex yet popular Chinese language, or for students that want to gain an awareness of the music, films and general traditions across China - we see the keen interest across our community as an opportunity to foster cultural competence, appreciation and most importantly, form cross-cultural relationships amongst an Australian Chinese community. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Benefits */}
      <div class="benefitsContainer">
        <h1> Why join ACSS? </h1>
        <h3> Check out all the perks </h3>
        <Container fluid={true}>
          <Row className="benefitsContainer-row" lg="auto">
            <Col lg={{ span: 2, offset: 3 }} sm={{ span: 12, offset: 0 }}>
              <div class="benefitsContainer-col">
                <Image className="logo" src={logo} fluid />
                <h2> Make Friends  </h2>
                <p> From local students to international students, we'll help you find opportunities to connect with awesome people that also love chinese culture.</p>
              </div>
            </Col>
            <Col lg={2}>
              <div class="benefitsContainer-col">
                <Image className="logo" src={logo} fluid />
                <h2> Learn Mandarin </h2>
                <p> Want to learn mandarin? We'll be hosting language workshops throughout the year! </p>            </div>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <div class="benefitsContainer-col">
                <Image className="logo" src={logo} fluid />
                <h2> Chinese Cuisine </h2>
                <p> Love food? We'll take you to some of the best places to eat and drink! </p>
              </div>
            </Col>
          </Row>
          <Row className="benefitsContainer-row" lg="auto">
            <Col lg={{ span: 2, offset: 3 }} sm={{ span: 12, offset: 0 }}>
              <div class="benefitsContainer-col">
                <Image className="logo" src={logo} fluid />
                <h2> Make Friends  </h2>
                <p> From local students to international students, we'll help you find opportunities to connect with awesome people that also love chinese culture.</p>
              </div>
            </Col>
            <Col lg={2}>
              <div class="benefitsContainer-col">
                <Image className="logo" src={logo} fluid />
                <h2> Learn Mandarin </h2>
                <p> Want to learn mandarin? We'll be hosting language workshops throughout the year! </p>            </div>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <div class="benefitsContainer-col">
                <Image className="logo" src={logo} fluid />
                <h2> Chinese Cuisine </h2>
                <p> Love food? We'll take you to some of the best places to eat and drink! </p>
              </div>
            </Col>
          </Row>
        </Container>


        {/* Ready to Join */}
        <div class="readyContainer">
          <h1> Ready to join? </h1>
          <Container fluid={true}>
            <Row>
              <Col lg={{ span: 2, offset: 5 }}>
                <a href="/join"> <button class="hvr-grow"> Join Now </button> </a>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer></Footer>

      </div>
    </div >
  );
}

export default About;
