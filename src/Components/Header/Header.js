import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Logo from '../../Images/logo.png';
import {Outlet, Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fash"><img src={Logo}/> FASHION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="catalogue">
            <Nav.Link href="#home"><Link to="/">HOME</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/about">ABOUT</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/contact">CONTACT</Link></Nav.Link>
            <Button variant="dark">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>

    </div>
  )
}

export default Header