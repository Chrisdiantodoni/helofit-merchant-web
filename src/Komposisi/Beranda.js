import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Beranda.css";
import Navbarbefore from "../Komponen/Navbar(before login)";
import { Container, Nav, Button } from "react-bootstrap";
import React, { Component } from "react";
import Beranda_2 from "./Beranda (part 2)";
import ilustrasi from "../Assets/ilustrasi.png";
export default class Beranda extends Component {
  render() {
    return (
      <div>
        <Navbarbefore />
        <Container className='text-center'>
          <h1 className='pt-5 text-dark font-weight-bold'>
            Simple Personal Management <br />
            Tasks and Finance
          </h1>
          <h5 className='text-muted '>
            Membantu Kamu lebih teratur dalam kegiatan dan keuangan
          </h5>
          <Nav.Link href='#porto' className='d-inline-block mx-auto'>
            <Button variant='primary' className='btn-sm rounded-pill'>
              Lebih Detail
            </Button>
          </Nav.Link>
          <Nav.Link href='/daftar' className='d-inline-block me-5'>
            <Button
              variant='light'
              className='btn-sm btn-outline-primary rounded-pill'>
              Daftar Gratis !
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
      </div>
    );
  }
}
