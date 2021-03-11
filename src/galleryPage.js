import './galleryPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import { Link } from "react-router-dom";
import oday16 from "./img/oday/oday16.JPG"
import lunar4 from "./img/lunarMarkets/lunar4.jpg";
function galleryPage() {


    return (
        <div className="galleryPage">

            {/* Navigation */}
            <Navigation> </Navigation>


            {/* Header */}
            <div class="headerContainer">
                <Container fluid={true} className="galleryHeader">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 class="animate__animated animate__fadeInDown"> Gallery </h1>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Gallery */}
            <div >
                <Container fluid={true} className="galleryContainer">
                    <Row >
                        <Col lg={{ span: 3, offset: 3 }} >
                            <Link to="/odayGallery">
                                <Card style={{ width: '45vh' }} className="galleryCard">
                                    <Card.Img variant="top" src={oday16} />

                                    <Card.Body>
                                        <h2> O'day Clubs Expo </h2>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={{ span: 3, offset: 0 }}>
                            <Link to="/lunarGallery">
                                <Card style={{ width: '45vh' }} className="galleryCard">
                                    <Card.Img variant="top" src={lunar4} />
                                    <Card.Body>
                                        <h2> Lunar Markets </h2>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div >
    );
}

export default galleryPage;
