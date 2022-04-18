import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png'
const Header = () => {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home"><img height={30} src={logo} alt="" /><span className='ms-2'>Digital Studio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fs-4">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="blogs">Blog</Nav.Link>
              <Nav.Link href="Chackout">Chack Out</Nav.Link>
              
              
            </Nav>
            <Nav className='fs-4'>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;