import React from 'react';
import './MyNav.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
          <MDBIcon className="mdb-icon text-info" fab icon="react" size='3x'/>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Cliff Rosenberg</Navbar.Brand>
          </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/about">
                <Nav.Link href="#about">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link href="#resume">My Resume</Nav.Link>
              </LinkContainer>
            </Nav>
      </Navbar>
  );
}

export default MyNav;