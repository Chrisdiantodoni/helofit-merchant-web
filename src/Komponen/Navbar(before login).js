import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
export class Navbarbefore extends Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand>
            <img
              className='img-fluid logo d-inline-block mx-auto'
              src={logo}
              width='150px'
              height='20px'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='text-center mx-auto me-1'>
              <Nav.Link className='efek fs-6'>
                <NavLink
                  to='/'
                  className='text-decoration-none'
                  exact
                  activeStyle={{ fontWeight: "bold", color: "blue" }}>
                  Beranda
                </NavLink>
              </Nav.Link>
              <Nav.Link className='efek fs-6'>
                <NavLink
                  to='/layanan'
                  className='text-decoration-none'
                  activeClassName='aktif'>
                  Layanan
                </NavLink>
              </Nav.Link>
              <Nav.Link className='efek fs-6'>
                <NavLink
                  to='/tentang'
                  className='text-decoration-none'
                  activeClassName='aktif'>
                  Tentang
                </NavLink>
              </Nav.Link>
              <Nav.Link className='efek fs-6'>
                <NavLink
                  to='/kontak'
                  className='text-decoration-none'
                  activeClassName='aktif'>
                  Kontak
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav className='ms-auto me-5'>
              <Nav.Link href='/login'>
                <Button variant='primary' className='rounded-3'>
                  Masuk
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbarbefore;
