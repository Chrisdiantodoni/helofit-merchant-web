import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { HiSwitchHorizontal } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../Assets/logo.png";
import AuthService from "../services/auth.service";
export class Navbaradmin extends Component {
  constructor(props) {
    super(props);
    this.state = { currentAdmin: true };
    this.KeluarAdmin = this.KeluarAdmin.bind(this);
  }
  KeluarAdmin() {
    AuthService.KeluarAdmin();
  }
  componentDidMount() {
    const admin = AuthService.getCurrentAdmin();

    if (admin) {
      this.setState({
        currentAdmin: admin,
      });
    }
  }
  render() {
    const { currentAdmin } = this.state;
    return (
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <div>
            <Navbar.Brand className='ms-5'>
              <img
                className='img-fluid logo d-inline-block text-center'
                src={logo}
                width='150px'
                height='20px'
              />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            &ensp;
            <span className='ps-5 mt-2 fs-3 fw-bold text-secondary'>
              <HiSwitchHorizontal className='border border-secondary mb-2 me-2' />
              {this.props.konten}
            </span>
            <Nav className='ms-auto me-5'>
              <span className='d-flex ms-4 mt-2 fs-3 fw-bold '>
                <AiOutlineUser className='mt-3 text-secondary' />
                <NavDropdown
                  title={currentAdmin.username}
                  id='basic-nav-dropdown'
                  className='text-dark'>
                  <NavDropdown.Item href='/' onClick={this.KeluarAdmin}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbaradmin;
