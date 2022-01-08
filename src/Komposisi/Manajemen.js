import React, { Component } from "react";
import Footer from "./Footer";
export class Manajemen extends Component {
  render() {
    return (
      <div className='container text-start'>
        <div className='row g-4 mt-3'>
          <div className='col text-start ms-1'>
            <p>
              <span className='text-primary'>Manajemen Kegiatan</span>
              <h3 className='fw-bold text-black'>Tasks To-do List</h3>
              <p className='card-text text-muted'>
                To-do list adalah sebuah dasar dari manajemen waktu yang
                <br />
                paling mudah dan sederhana. Walaupun paling mudah, mendasar,
                <br />
                dan sederhana, jika diterapkan secara konsisten maka dapat
                <br />
                mendongkrak hidup secara signifikan.
                <br />
                (Buku Simply Productive oleh Arry Rahmawan, 2014)
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
    );
  }
}

export default Manajemen;
