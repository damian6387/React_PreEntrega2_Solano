import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import icon from "../assets/icon.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Componente NavBar
const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#" className="logoStyle">
            <img src={icon} alt="logo" className="iconStyle"></img>
            <h2>The Green Corner</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="linkStyle">
              Home
            </Link>
            <Link to="/productos/cafeteria" className="linkStyle">
              Coffee Shop
            </Link>
            <Link to="/productos/plantas" className="linkStyle">
              Plants Shop
            </Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </header>

    /*<nav>
      <div className="navStyle">
        <h1>The Green Corner</h1>
        <Link to="/">
          <img src={icon} alt="logo" className="iconStyle"></img>
        </Link>
        <div>
          <ul>
            <li>
              <Link to="/" className="linkStyle">
                Home
              </Link>
            </li>
            <li>
              <Link to="/productos/cafeteria" className="linkStyle">
                Coffee Shop
              </Link>
            </li>
            <li>
              <Link to="/productos/plantas" className="linkStyle">
                Plants Shop
              </Link>
            </li>
            <li>
              <Link to={"/nosotros"} className="linkStyle">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <CartWidget />
      </div>
    </nav>*/
  );
};

export default NavBar;
