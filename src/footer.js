import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { Nav, Navbar, Row, Col, Container, Image } from "react-bootstrap";
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import discord from './img/discord.png';
import logo from './img/activate-logo.png';


function Footer() {
    return (
        <div>

            <div class="footerContainer">
                <Container fluid={true} className="footer">
                    <Row>
                        <Col lg={{ span: 12, offset: 0 }} >
                            <a href="https://www.facebook.com/uts.acss" target="_blank">  <Image className="socialmedia hvr-grow" src={facebook} rounded /> </a>
                            <a href="https://www.instagram.com/uts.acss/" target="_blank">  <Image className="socialmedia hvr-grow" src={instagram} rounded /> </a>
                            <a href="https://discord.gg/ynTgEGYyCZ/" target="_blank">  <Image className="socialmedia hvr-grow" src={discord} rounded /> </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p> acss@activateuts.com.au </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 12, offset: 0 }} >
                            <Image className="activate" src={logo} fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p> Design And Developed by UTS ACSS. Copyright ©2021. All Rights Reserved. </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
}

export default Footer;
