import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "./Assets/logo.png";
import { BsCart3 } from "react-icons/bs";
import Beranda from "./Komposisi/Beranda";
import Layanan from "./Komposisi/Layanan";
import Daftar from "./Komposisi/Daftar";
import Login from "./Komposisi/Login";
import Kontak from "./Komposisi/Kontak";
import Tentang from "./Komposisi/Tentang";
import Welcome from "./Komposisi/Welcome";
import AuthService from "./services/auth.service";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.Keluar = this.Keluar.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: true,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  Keluar() {
    AuthService.Keluar();
  }
  On() {
    this.setState({
      currentUser: false,
    });
  }
  Off() {
    this.setState({
      currentUser: true,
    });
  }
  render() {
    var buttons;
    const currentUser = this.state;
    if (currentUser) {
      buttons = (
        <Nav>
          <Nav.Link to={"/welcome"} className='nav-link'>
            {currentUser.nama_dpn}
          </Nav.Link>
          <Nav.Link href='/login' className='nav-link' onClick={this.Keluar}>
            <Button
              variant='danger'
              className='rounded-3'
              onClick={this.Off.bind(this)}>
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      );
    } else {
      buttons = (
        <Nav.Link href='/login'>
          <Button
            variant='primary'
            className='rounded-3'
            onClick={this.On.bind(this)}>
            Masuk
          </Button>
        </Nav.Link>
      );
    }

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
      {
        path: "/tentang",
        render: () => <Tentang />,
      },
      {
        path: "/daftar",
        render: () => <Daftar />,
      },
      {
        path: "/kontak",
        render: () => <Kontak />,
      },
      {
        path: "/login",
        render: () => <Login />,
      },
      {
        path: "/welcome",
        render: () => <Welcome />,
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
                {buttons}
                {/* {currentUser ? (
                  <Nav>
                    <Nav.Link to={"/welcome"} className='nav-link'>
                      {currentUser.nama_dpn}
                    </Nav.Link>
                    <Nav.Link
                      href='/login'
                      className='nav-link'
                      onClick={this.Keluar}>
                      <Button variant='danger' className='rounded-3'>
                        Logout
                      </Button>
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav.Link href='/login'>
                    <Button variant='primary' className='rounded-3'>
                      Masuk
                    </Button>
                  </Nav.Link>
                )} */}
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
