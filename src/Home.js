import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Image, Tab, Tabs, Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import welcome from './img/welcome.jpg';
import WelcomeAnnouncement from "./announcements/WelcomeAnnouncement.js";
import MerchAnnouncement from "./announcements/MerchAnnouncement.js";
import group from "./img/group.JPG";
import groupred from "./img/groupred.JPG";

import logo from "./img/logo.png";

function Home() {
    return (
        <div className="home">
            {/* Navigation bar */}
            <Navigation> </Navigation>

            {/* Landing Page */}
            <div className="coverContainer">
                <Container fluid={true}>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h3 class="animate__animated animate__fadeInDown"> Australian Chinese Students Society </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }}>
                            <p class="animate__animated animate__fadeInDown">  Our mission is to encourage the interaction and unity between international and domestic Chinese Students through the exploration of Chinese culture. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 4 }}>
                            <a href="/join"> <button class="hvr-grow"> Join Now </button> </a>
                        </Col>
                        <Col lg={{ span: 2 }}>
                            <a href="/about"> <button class="hvr-grow">  Learn More </button>  </a>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Announcements */}
            <div class="announcementsContainer">
                <h1> Announcements </h1>
                <Container fluid={true} className="announcements">
                    <Row>
                        <Col lg={{ span: 6 }, { offset: 3 }}>
                            <Tabs className="tabs"
                                id="controlled-tab-example"
                                className="singleTab"
                            >
                                <Tab eventKey="home" title="Welcome Event">
                                    <WelcomeAnnouncement> </WelcomeAnnouncement>
                                </Tab>
                                <Tab eventKey="profile" title="New Merch">
                                    <MerchAnnouncement> </MerchAnnouncement>

                                </Tab>
                                <Tab eventKey="contact" title="AGM">


                                </Tab>
                            </Tabs>
                        </Col>
                        <Col lg={{ span: 3 }}>
                        </Col>
                    </Row>
                </Container>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dd3438" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,192C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Home;
