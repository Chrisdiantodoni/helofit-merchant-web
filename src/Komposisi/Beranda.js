import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Beranda.css";
import Daftar from "./Daftar";
import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Beranda_2 from "./Beranda (part 2)";
import ilustrasi from "../Assets/ilustrasi.png";
export default class Beranda extends Component {
  render() {
    return (
      <div>
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
          <Nav.Link href='#daftar' className='d-inline-block me-5'>
            {/* <Button
              variant='outline-primary'
              className='btn-sm rounded-pill me-1'>
              Daftar Gratis!
            </Button> */}
            <Daftar />
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
