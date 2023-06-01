import React, { Component, useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { HiSwitchHorizontal } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../Assets/Helofit-logo.png";

const Navbaradmin = (props) => {
  const [data, setData] = useState({});

  const dataAdmin = () => {
    const storedUserData = localStorage.getItem("dataAdmin");
    console.log(storedUserData);
    setData(JSON.parse(storedUserData));
  };
  useEffect(() => {
    dataAdmin();
  }, []);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div>
          <Navbar.Brand className="ms-5">
            <img
              className="img-fluid logo d-inline-block text-center"
              src={logo}
              width="150px"
              height="20px"
            />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          &ensp;
          <span className="ps-5 mt-2 fs-3 fw-bold text-dark">
            <HiSwitchHorizontal className="border border-secondary mb-2 me-2" />
            {props.konten}
          </span>
          <Nav className="ms-auto me-5 text-dark">
            <span className="d-flex ms-4 mt-2 fs-7 fw-bold text-dark">
              {data ? (
                <NavDropdown
                  title={data?.username}
                  id="basic-nav-dropdown"
                  className="text-dark fw-bold"
                >
                  <NavDropdown.Item href="/" onClick={"handleLogout"}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaradmin;
