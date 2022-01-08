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
      <Container className='mt-5'>
        <hr className='text-muted mt-5' />
        <div className='footer mb-5'>
          <div className='row'>
            <div className='col-md-5 text-start mt-4'>
              <img
                className='img-fluid logo d-inline-block me-auto'
                src={logo}
                width='150px'
                height='20px'
              />
              <p className='text-muted'>
                Agensi Digital Kreatif yang siap memproduksi aset-aset <br />
                digital yang bukan sekedar menarik, tapi juga memberikan <br />
                engagement kepada audience brand dan produk Anda
              </p>
            </div>
            <div className='col-md-3 text-start mt-4'>
              <h5>Halaman</h5>
              <p>
                <a className='aktif-footer' href='/tentang'>
                  Tentang
                </a>
                <br />
                <a className='aktif-footer' href='/kontak'>
                  Kontak
                </a>
                <br />
                <a className='aktif-footer' href='/faq'>
                  Bantuan/FAQ
                </a>
              </p>
            </div>
            <div className='col-md-2 text-start mt-4'>
              <h5>Layanan</h5>
              <p>
                <a className='aktif-footer' href='/manajemen'>
                  Manajemen Kegiatan
                </a>
                <br />
                <a className='aktif-footer' href='/keuangan'>
                  Catatan Keuangan
                </a>
              </p>
            </div>
            <div className='col-md-2 text-start mt-4'>
              <h5>Ikuti</h5>
              <p>
                <BsFacebook className='icon fb me-1' />
                <BsInstagram className='icon ig' />
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
