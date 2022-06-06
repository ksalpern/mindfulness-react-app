//import { Modal } from "bootstrap";
import React  from "react";
import { Navbar, NavLink, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div `
a, .navbar-brand, .navbar-nav, .nav-link {
  color: #adb1b8;
  &:hover {
    color: white
  }
}
`

export function Navibar() {



  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand> mindfulness  </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink>
                  <Link to="/home">Home</Link>
                </NavLink>
                <NavLink>
                  <Link to="/album">Album</Link>
                </NavLink>
                <NavLink>
                  <Link to="/about">About</Link>
                </NavLink>
              </Nav>
         
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
     
     
    </>
  )}
