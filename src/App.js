import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "./Assets/logo.png";
import { BsCart3, BsFacebook, BsInstagram } from "react-icons/bs";
import Beranda from "./Komposisi/Beranda";
import Layanan from "./Komposisi/Layanan";
import Daftar from "./Komposisi/Daftar";
import {
  BrowserRouter as Router,
  NavLink,
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
      {
        path: "/layanan",
        render: () => <Layanan />,
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
        <Switch>
          {routes.map((item, index) => (
            <Route path={item.path} exact={item.exact} render={item.render} />
          ))}
        </Switch>
      </Router>
    );
  }
}
export default App;
