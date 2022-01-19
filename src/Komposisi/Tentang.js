import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import Footer from "./Footer";
import Navbarbefore from "../Komponen/Navbar(before login)";
import marco from "../Assets/marco.jpg";
import karim from "../Assets/karim.png";
import adrian from "../Assets/adrian.png";
import zulharmin from "../Assets/zulharmin.jpeg";
import christa from "../Assets/christa.png";
class Tentang extends Component {
  render() {
    return (
      <div>
        <Navbarbefore />
        <Container className='text-center mx-auto'>
          <div className='row g-4 mt-3'>
            <div className='col-md-8 text-start ms-1'>
              <p>
                <span className='text-primary'>Tentang Kami</span>
                <h3 className='fw-bold text-black'>Apa sih Taskita itu?</h3>
                <p className='card-text text-muted'>
                  Taskita adalah aplikasi berbasis website yang simpel,
                  <br />
                  modern, dan ringan bertujuan memudahkan setiap
                  <br />
                  pribadi mengatur kegiatan dan mencatat keuangan
                </p>
              </p>
            </div>
            <div className='col-md-2 bg-info me-auto'>
              <img className='img-fluid rounded-start bg-primary' />
            </div>
            <div className='col-md-7 text-start ms-1'>
              <p className='text-muted'>
                Visi Taskita <br />
                <h5 className='fw-bold text-dark'>
                  Puluhan juta pengguna di Indonesia <br />
                  merasakan manfaat aplikasi
                </h5>
              </p>
            </div>
            <div className='col-md ms-5'>
              <p className='text-muted text-start'>
                Misi Taskita <br />
                <h5 className='fw-bold text-dark'>
                  Untuk membuat suatu budaya <br />
                  setiap individu baru agar lebih <br />
                  teratur setiap harinya
                </h5>
              </p>
            </div>
          </div>
          <p className='text-muted'>
            Keunggulan Kami <br />
            <h3 className='fw-bold text-dark'>Kenapa harus Taskita?</h3>
          </p>
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Mudah Digunakan
                  </h5>
                  <p className='card-text text-muted'>
                    Gak ada kata ribet dalam kamus Taskita, karena aplikasi ini
                    mudah digunakan sesuai kebutuhanmu
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Layanan gratis
                  </h5>
                  <p className='card-text text-muted'>
                    Untuk menggunakan fitur yang ada , kamu tidak perlu khawatir
                    karena semua fitur Taskita gratis
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Tampilan Menarik
                  </h5>
                  <p className='card-text text-muted'>
                    Bukan cuma simpel, Taskita juga bikin kamu gak bosen dan
                    enak dilihat ketika menggunakannya.
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>Kecepatan</h5>
                  <p className='card-text text-muted'>
                    Untuk kecepatan Taskita gak usah diragukan lagi deh,
                    pokoknya anti lelet dan anti nunggu.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-3 g-4 mt-3'>
            <div className='col'>
              <div className='pt-5 mt-5'>
                <p className='text-muted'>
                  Team Kami <br />
                  <h3 className='fw-bold text-dark'>Berkenalan dengan Team</h3>
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <img
                  className='mx-auto d-inline-block'
                  src={marco}
                  height='200px'
                />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Marco Lukita</h4>
                  <p className='text-muted d-inline'>Back-end Developer</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <img
                  className='mx-auto d-inline-block'
                  src={karim}
                  height='200px'
                />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Kevin Karim</h4>
                  <p className='text-muted d-inline'>Back-end Developer</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <img
                  className='mx-auto d-inline-block'
                  src={adrian}
                  height='200px'
                />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Adrian</h4>
                  <p className='text-muted d-inline'>Front-end Developer</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <img
                  className='mx-auto d-inline-block'
                  src={zulharmin}
                  height='200px'
                />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Zulharmin</h4>
                  <p className='text-muted d-inline'>UI Designer</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <img
                  className='mx-auto d-inline-block'
                  src={christa}
                  height='200px'
                />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Christa</h4>
                  <p className='text-muted d-inline'>Front-end Developer</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Tentang;
