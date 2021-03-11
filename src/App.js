import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Image, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Home from "./Home.js";
import Team from "./Team.js";

import Footer from "./footer.js"
import logo from './img/make-friends.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  return (

    <div className="App">

      <Navigation> </Navigation>


      <Team></Team>

    </div>
  );
}

export default App;
