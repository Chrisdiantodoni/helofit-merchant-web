import React, { Component } from "react";
import Footer from "./Footer";
import Navbarbefore from "../Komponen/Navbar(before login)";
import ilustrasimanajamenkegiatan from "../Assets/ilustrasimanajamenkegiatan.png";
export class Manajemen extends Component {
  render() {
    return (
      <div>
        <Navbarbefore />
        <div className='container text-start'>
          <div className='row g-4 mt-3'>
          <div className='col-md-6 text-start '>
              <p>
                <span className='text-primary'>Manajemen Kegiatan</span>
                <h3 className='fw-bold text-black'>Tasks To-do List</h3>
                <p className='card-text text-muted'>
                To-do list adalah sebuah dasar dari manajemen waktu yang
                  paling mudah dan sederhana. Walaupun paling mudah, mendasar,
                  dan sederhana, jika diterapkan secara konsisten maka dapat
                  mendongkrak hidup secara signifikan. (Buku Simply Productive oleh Arry Rahmawan, 2014)
                </p>
                <a href='/login' className='btn btn-primary mt-2'>
                  Mulai Sekarang
                </a>
              </p>
            </div>
            <div className='col-md-4 '>
              <img src={ilustrasimanajamenkegiatan} height='auto' width='auto' />
            </div>
            {/* <div className='col text-start ms-1'>
              <p>
                <span className='text-primary'>Manajemen Kegiatan</span>
                <h3 className='fw-bold text-black'>Tasks To-do List</h3>
                <p className='card-text text-muted'>
                  To-do list adalah sebuah dasar dari manajemen waktu yang
                  paling mudah dan sederhana. Walaupun paling mudah, mendasar,
                  dan sederhana, jika diterapkan secara konsisten maka dapat
                  mendongkrak hidup secara signifikan. (Buku Simply Productive oleh Arry Rahmawan, 2014)
                </p>
                <a href='/login' className='btn btn-primary mt-2'>
                  Mulai Sekarang
                </a>
              </p>
            </div>
            <div className='col bg-info me-auto'>
              <img src={ilustrasitentang} height='auto' width='auto' />
            </div> */}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Manajemen;
