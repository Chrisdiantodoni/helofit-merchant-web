import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "./Assets/logo.png";
import { BsCart3 } from "react-icons/bs";
import Beranda from "./Komposisi/Beranda";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
class App extends React.Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <Beranda />,
      },
    ];
    return (
      <Router>
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
                <Nav.Link className='efek text-dark fs-6'>
                  <Link to='/'>Beranda</Link>
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
        <Beranda />
        {/* <div>
          <Switch></Switch>
        </div> */}
      </Router>
    );
  }
}
export default App;
