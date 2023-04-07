import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

export class Navbarbefore extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <img
            src={logo}
            className="img-fluid logo d-inline-block mx-auto"
            height="64px"
            width="218px"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto me-1 ">
              <Nav.Link className="fs-6">
                <NavLink
                  to="/"
                  className="text-decoration-none"
                  activeClassName="aktif"
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: 20,
                    paddingRight: 62,
                  }}
                >
                  Beranda
                </NavLink>
              </Nav.Link>
              <Nav.Link className="fs-6">
                <NavLink
                  to="/tentang"
                  className="text-decoration-none"
                  activeClassName="aktif"
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: 20,
                    paddingRight: 62,
                  }}
                >
                  Tentang
                </NavLink>
              </Nav.Link>
              <Nav.Link className="fs-6">
                <NavLink
                  to="/Fitur"
                  className="text-decoration-none"
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: 20,
                    paddingRight: 62,
                  }}
                >
                  Fitur
                </NavLink>
              </Nav.Link>
              <Nav.Link className="fs-6">
                <NavLink
                  to="/kontak"
                  className="text-decoration-none"
                  activeClassName="aktif"
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: 20,
                    paddingRight: 62,
                  }}
                >
                  Kontak
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto me-5 justify-conter-center">
              <Nav.Link
                className="fs-6"
                style={{
                  backgroundColor: "#C4F601",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: 221,
                  height: 56,
                }}
              >
                <NavLink
                  to="/login"
                  className="text-decoration-none"
                  style={{
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Mitra Masuk
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbarbefore;
