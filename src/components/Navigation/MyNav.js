import React from 'react';
import './MyNav.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <MDBIcon className="mdb-icon text-info" fab icon="react" size='3x'/>
          <Navbar.Brand href="#home">Cliff Rosenberg</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#protfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">My Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export { MyNav };