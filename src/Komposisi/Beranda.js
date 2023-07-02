import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Beranda.css";
import Navbarbefore from "../Komponen/Navbar(before login)";
import { Container, Nav, Button, Dropdown } from "react-bootstrap";
import React, { Component } from "react";
import Beranda_2 from "./Beranda (part 2)";
import ilustrasi from "../Assets/ilustrasi.png";
import { Link, NavLink } from "react-router-dom";
export default class Beranda extends Component {
  render() {
    return (
      <div style={{ background: "#161616" }}>
        <Navbarbefore />
        <Container
          className="text-center"
          style={{ marginTop: 56, marginBottom: 16 }}
        >
          <h1 className="text-white font-weight-bold pb-1 ">
            Kini Olahraga Menjadi <br />
            Jauh Lebih menyenangkan
          </h1>
          <h5 className="text-white pb-1 ">
            Bantu Kamu Temukan Teman Main dan Fasilitas yang Kamu Mau
          </h5>
          {/* <Nav.Link href='/manajemen' className='d-inline-block mx-auto'>
            <Button variant='primary' className='btn-sm rounded-pill'>
              Lebih Detail
            </Button>
          </Nav.Link> */}
          <Container className="pt-4" style={{ marginBottom: 40 }}>
            <Button
              style={{
                background: "#C4F601",
                marginRight: 15,
                fontWeight: "700",
                color: "#000000",
                border: "1px",
                borderRadius: 16,
                width: 240,
                height: 56,
              }}
              size="lg"
            >
              Download Aplikasi
            </Button>
            <NavLink to={"/daftar"}>
              <Button
                style={{
                  marginRight: 15,
                  border: "3px solid #FFFFFF",
                  borderRadius: "16px",
                  width: 240,
                  height: 56,
                }}
                variant="dark"
                size="lg"
              >
                Gabung Mitra
              </Button>
            </NavLink>
          </Container>

          <img
            src={ilustrasi}
            className="img-fluid d-block mt-5 mx-auto"
            width="854px"
            height="320px"
          />
          <br />
          <Beranda_2 />
        </Container>
      </div>
    );
  }
}
