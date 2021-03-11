import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Nav, Image, Navbar } from "react-bootstrap";
import logo from './img/logo.png';
import { Link } from "react-router-dom";

function Navigation() {
    return (

        <div class="nav">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="navigation">
                <Navbar.Brand href="#home" ><Image className="logo" src={logo} fluid /> </Navbar.Brand>
                <Navbar.Brand href="#home" className="brandName"> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="/home" ><button class="hvr-underline-from-center"> <Link to="/home"> Home </Link></button> </Nav.Link>
                        <Nav.Link href="/about"><button class="hvr-underline-from-center"> <Link to="/about"> About </Link> </button></Nav.Link>
                        <Nav.Link href="/team" ><button class="hvr-underline-from-center"> <Link to="/team"> Team </Link> </button></Nav.Link>
                        <Nav.Link href="#events"><button class="hvr-underline-from-center"> <Link to="/events"> Events  </Link> </button></Nav.Link>
                        <Nav.Link href="/gallery"><button class="hvr-underline-from-center"> <Link to="/gallery"> Gallery  </Link> </button></Nav.Link>
                        <Nav.Link href="/join"><button class="hvr-underline-from-center"> <Link to="/join"> Join Us </Link> </button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </div>


    );
}

export default Navigation;
