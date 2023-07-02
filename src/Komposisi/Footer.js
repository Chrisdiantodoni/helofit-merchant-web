import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import logo from "../Assets/logo.png";
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export class Footer extends Component {
  render() {
    return (
      <Container className="mt-5">
        <hr className="text-muted mt-5" />
        <div className="footer mb-5">
          <div className="row">
            <div className="col-md-5 text-start mt-4">
              <img
                className="img-fluid logo d-inline-block me-auto"
                src={logo}
                width="150px"
                height="20px"
              />
              <p className="text-muted mt-2">
                Copyright -2023 Pengerjaan Tugas Akhir oleh Zulharmin & Doni
                Chrisdianto
              </p>
            </div>
            <div className="col-md-3 text-light mt-4 text-start">
              <h3>Halaman</h3>
              <p>
                <a className="aktif-footer" href="/tentang">
                  Tentang
                </a>
                <br />
                <a className="aktif-footer" href="/kontak">
                  Kontak
                </a>
                <br />
                <a className="aktif-footer" href="/faq">
                  Bantuan/FAQ
                </a>
              </p>
            </div>
            <div className="col-md-2 text-light mt-4 text-start">
              <h3>Pintasan</h3>
              <p>
                <a className="aktif-footer" href="/Fitur">
                  Fitur Helofit
                </a>
                <br />
                <a className="aktif-footer" href="/daftar">
                  Gabung Mitra
                </a>
              </p>
            </div>
            <div className="col-md-2 text-light mt-4 text-start">
              <h3>Ikuti Kami</h3>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <BsFacebook
                  className="icon fb me-3"
                  size={24}
                  color="#FFFFFF"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <BsInstagram className="icon ig" size={24} color="#FFFFFF" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
