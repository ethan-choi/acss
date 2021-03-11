import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Image, Tab, Tabs, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import welcome from './img/welcome.jpg';
import image from './img/avatar.png';
import icon1 from './img/makefriends.png';
import icon2 from './img/muchmore.png';
import icon3 from './img/cuisine.png';
import icon4 from './img/funnights.png';
import oday7 from "./img/oday/oday7.JPG"
import oday1 from "./img/oday/oday1.JPG"


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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#dd3438" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,138.7C320,117,400,107,480,101.3C560,96,640,96,720,106.7C800,117,880,139,960,165.3C1040,192,1120,224,1200,208C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>

      {/* Who */}
      <div class="introContainer">
        <h1> What is ACSS? </h1>
        <Container fluid>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} sm={{ span: 12, offset: 0 }}>
              <div class="introContainer-col">
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

        <Container fluid={true}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,186.7C274.3,203,343,245,411,261.3C480,277,549,267,617,256C685.7,245,754,235,823,240C891.4,245,960,267,1029,240C1097.1,213,1166,139,1234,117.3C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
          <div class="whiteBenefits">
            <Row className="benefitsContainer-row">
              <Col lg={{ span: 4, offset: 2 }}>
                <div class="benefitsText">
                  <Image className="benefitsIcon" src={icon1} fluid />
                  <h2> Make Friends  </h2>
                  <p> From local students to international students, we'll help you find opportunities to connect with awesome people that also love chinese culture.</p>
                </div>
              </Col>
              <Col lg={{ span: 4 }}>
                <div class="">
                  <Image className="benefitsImage" src={oday7} fluid />
                </div>
              </Col>
            </Row>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L34.3,197.3C68.6,171,137,117,206,122.7C274.3,128,343,192,411,218.7C480,245,549,235,617,224C685.7,213,754,203,823,176C891.4,149,960,107,1029,101.3C1097.1,96,1166,128,1234,149.3C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>


          <Row className="benefitsContainer-row">
            <Col lg={{ span: 4, offset: 2, order: 1 }} xs={{ span: 12, order: 12 }}>
              <div class="">
                <Image className="benefitsImage" src={oday1} fluid />
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 0, order: 12 }} xs={{ span: 12, order: 1 }}>
              <div class="benefitsText">
                <Image className="benefitsIcon" src={icon2} fluid />
                <h2> Learn Mandarin </h2>
                <p> Want to learn mandarin? We'll be hosting language workshops throughout the year! </p>

              </div>
            </Col>
          </Row>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,186.7C274.3,203,343,245,411,261.3C480,277,549,267,617,256C685.7,245,754,235,823,240C891.4,245,960,267,1029,240C1097.1,213,1166,139,1234,117.3C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
          <div class="whiteBenefits">
            <Row className="benefitsContainer-row">
              <Col lg={{ span: 4, offset: 2 }}>
                <div class="benefitsText">
                  <Image className="benefitsIcon" src={icon3} fluid />
                  <h2> Chinese Cuisine </h2>
                  <p> Love food? We'll take you to some of the best places to eat and drink! </p>
                </div>
              </Col>
              <Col lg={{ span: 4 }}>
                <div class="">
                  <Image className="benefitsImage" src={oday7} fluid />
                </div>
              </Col>
            </Row>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L34.3,197.3C68.6,171,137,117,206,122.7C274.3,128,343,192,411,218.7C480,245,549,235,617,224C685.7,213,754,203,823,176C891.4,149,960,107,1029,101.3C1097.1,96,1166,128,1234,149.3C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
          <Row className="benefitsContainer-row">
            <Col lg={{ span: 4, offset: 2, order: 1 }} xs={{ span: 12, order: 12 }}>
              <div class="">
                <Image className="benefitsImage" src={oday7} fluid />
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 0, order: 12 }} xs={{ span: 12, order: 1 }}>
              <div class="benefitsText">
                <Image className="benefitsIcon" src={icon4} fluid />
                <h2> Make Friends  </h2>
                <p> From local students to international students, we'll help you find opportunities to connect with awesome people that also love chinese culture.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Ready to Join */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa800" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,58.7C274.3,43,343,21,411,16C480,11,549,21,617,48C685.7,75,754,117,823,133.3C891.4,149,960,139,1029,133.3C1097.1,128,1166,128,1234,128C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <div class="readyContainer">

        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 2, offset: 5 }}>
              <a href="/join"> <button class="hvr-grow"> Join Now </button> </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer></Footer>


    </div >
  );
}

export default About;
