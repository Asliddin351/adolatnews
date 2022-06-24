import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} alt="logo" width="100%" height="auto" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className="navigation-link">
              <Link to="/uzbekistan" className="navigation-link">Узбекистан</Link>
            </Nav.Link>


            <Nav.Link>
              <Link to="/technology" className="navigation-link">Технологии</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/about" className="navigation-link">
                О нас
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/command" className="navigation-link">
                Команда Adolat NEWS
              </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
