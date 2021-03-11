import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "../Navbar.js";
import Footer from "../footer.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { lunarGalleryPhotos } from "./lunarGalleryPhotos.js"
import Gallery from "react-photo-gallery";
import lunar1 from "../img/lunarMarkets/lunar1.jpg"
import lunar2 from "../img/lunarMarkets/lunar2.jpg"
import lunar3 from "../img/lunarMarkets/lunar3.jpg"
import lunar4 from "../img/lunarMarkets/lunar4.jpg"



function lunarGallery() {


    return (
        <div class="gallery">
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


            <h1> Lunar Markets 2021 </h1>
            <Container fluid={true}>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar1} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar2} fluid />
                    </Col>
                </Row>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar2} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar3} fluid />
                    </Col>
                </Row>

                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 4 }} className="galleryCol">
                        <p> See all the photos at [url]</p>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div >
    );
}

export default lunarGallery;
