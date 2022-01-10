import React, { Component } from "react";
import Footer from "./Footer";
import Navbarbefore from "../Komponen/Navbar(before login)";
export class Keuangan extends Component {
  render() {
    return (
      <div>
        <Navbarbefore />
        <div className='container text-start'>
          <div className='row g-4 mt-3'>
            <div className='col text-start ms-1'>
              <p>
                <span className='text-primary'>Catatan Keuangan Harian</span>
                <h3 className='fw-bold text-black'>Daily Finance Record</h3>
                <p className='card-text text-muted'>
                  Seorang individu yang memiliki pengetahuan yang baik akan
                  dapat
                  <br />
                  mengatur keuangan dan mengutamakan kebutuhan dibandingkan
                  <br />
                  keinginan serta dapat menyisihkan uangnya untuk kebutuhan
                  <br />
                  yang akan datang.
                  <br />
                  (Penelitian oleh Kholilah dan Iramani, 2013)
                </p>
                <a href='/login' className='btn btn-primary mt-2'>
                  Mulai Sekarang
                </a>
              </p>
            </div>
            <div className='col bg-info me-auto'>
              <img className='img-fluid rounded-start bg-primary' />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Keuangan;
