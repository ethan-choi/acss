import './Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Badge, Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import uts from './img/uts.png';
import globe from './img/globe.png';

function Join() {
    return (

        <div className="join">

            {/* Navigation Bar */}
            <Navigation> </Navigation>


            {/* Header */}
            <div class="headerContainer">
                <Container fluid={true} className="teamHeader">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 class="animate__animated animate__fadeInDown"> Join</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#dd3438" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,138.7C320,117,400,107,480,101.3C560,96,640,96,720,106.7C800,117,880,139,960,165.3C1040,192,1120,224,1200,208C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>

            {/* Join Steps */}
            <div class="joinContainer">
                <h3> Join in 4 Easy Steps</h3>
                <Container fluid={true}>
                    <Row>
                        <Col lg={{ span: 2, offset: 2 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="primary"> 1 </Badge>{' '}
                            Let's Start </h2>
                                <p> Click the "Let's Start" button below. It will take you to activateuts.com.au where you become an ACSS member online. </p></Card>
                        </Col>

                        <Col lg={{ span: 2, offset: 0 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="danger"> 2 </Badge>{' '}
                            Click "Join" </h2>
                                <p>  It will ask you to register or login first. Please do before proceeding. </p></Card>
                        </Col>

                        <Col lg={{ span: 2, offset: 0 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="warning"> 3 </Badge>{' '}
                            Click "Buy" </h2>
                                <p>  next to the suitable membership. Prices: $5 for UTS Students/Staff, $25 for Non-UTS  </p></Card>
                        </Col>

                        <Col lg={{ span: 2, offset: 0 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="success"> 4 </Badge>{' '}
                            Payment </h2>
                                <p> Paypal or Pay with card </p></Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 5 }}>
                            <a href="https://activateuts.com.au/clubs/australian-chinese-student-society" target="_blank" > <button class="hvr-grow animate__animated animate__bounce animate__infinite">  Get started </button> </a>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Pricing */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,58.7C274.3,43,343,21,411,16C480,11,549,21,617,48C685.7,75,754,117,823,133.3C891.4,149,960,139,1029,133.3C1097.1,128,1166,128,1234,128C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div class="priceContainer">
                <Container fluid={true}>
                    <Row>
                        <Col lg={{ span: 2, offset: 4 }} >
                            <Card body className="priceCard">
                                <Image src={uts} fluid />
                                <h2> $5 </h2>
                                <p> UTS Students and Staff </p>
                            </Card>
                        </Col>
                        <Col lg={{ span: 2 }}>
                            <Card body className="priceCard">
                                <Image src={globe} fluid />
                                <h2> $25 </h2>
                                <p> Non-UTS </p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div >
    );
}

export default Join;
