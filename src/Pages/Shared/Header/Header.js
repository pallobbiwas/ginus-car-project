import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-black.png";

const Header = () => {
  return (
    <header>
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="primary"
          sticky="top"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img height={30} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#service">Services</Nav.Link>
                <Nav.Link href="home#expart">Experts</Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
