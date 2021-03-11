import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "../Navbar.js";
import Footer from "../footer.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { odayGalleryPhotos } from "./odayGalleryPhotos.js"
import Gallery from "react-photo-gallery";

function odayGallery() {


    return (
        <div class="gallery">
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


            <h1> O'Day Clubs Expo </h1>
            <Container fluid={true}>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} >
                        <Gallery photos={odayGalleryPhotos} />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    );
}

export default odayGallery;
