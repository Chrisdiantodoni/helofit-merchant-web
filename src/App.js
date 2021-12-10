import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Beranda_2 from "./Komponen/Beranda (part 2)";
import { BsCart3 } from "react-icons/bs";
import {
  Navbar,
  Card,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
import logo from "./Assets/logo.png";
import ilustrasi from "./Assets/ilustrasi.png";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>
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
                <Nav.Link href='#home' className='efek text-dark fs-6'>
                  Beranda
                </Nav.Link>
                <Nav.Link href='#link' className='efek text-dark fs-6'>
                  Layanan
                </Nav.Link>
                <Nav.Link href='#link' className='efek text-dark fs-6'>
                  Tentang
                </Nav.Link>
                <Nav.Link href='#link' className='efek text-dark fs-6'>
                  Kontak
                </Nav.Link>
              </Nav>
              <Nav className='ms-auto me-5'>
                <Navbar.Brand
                  href='#'
                  className='mt-1'
                  data-toggle='tooltip'
                  data-placement='bottom'
                  title='Keranjang'>
                  <BsCart3 className='icon' />
                </Navbar.Brand>
                <Nav.Link href='#login'>
                  <Button variant='primary' className='rounded-3'>
                    Masuk
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='text-center pe-5 me-5'>
          <h1 className='pt-5 text-dark'>Creative Digital Agency</h1>
          <p className='text-muted'>
            Kami ada untuk membangun strategi dalam meningkatkan penjualan
            digital usaha Kamu.
          </p>
          <Nav.Link href='#porto' className='d-inline-block mx-auto'>
            <Button variant='primary' className='btn-sm rounded-pill'>
              Lihat Portofolio
            </Button>
          </Nav.Link>
          <Nav.Link href='#porto' className='d-inline-block me-5'>
            <Button
              variant='outline-primary'
              className='btn-sm rounded-pill me-1'>
              Daftar Gratis!
            </Button>
          </Nav.Link>
          <img
            src={ilustrasi}
            className='img-fluid d-block mt-5 mx-auto'
            width='546px'
            height='500px'
          />
          <br />
          <Beranda_2 />
        </Container>
        {/* <div>
          <Switch></Switch>
        </div> */}
      </Router>
    );
  }
}
export default App;
