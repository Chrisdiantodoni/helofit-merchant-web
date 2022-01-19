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
                <h3 className='fw-bold text-black'>Apa sih microdigi itu?</h3>
                <p className='card-text text-muted'>
                  Agensi Digital Kreatif yang siap memproduksi aset-aset
                  <br />
                  digital yang bukan sekedar menarik, tapi juga memberikan
                  <br />
                  engagement kepada audience brand dan produk Kamu.
                </p>
              </p>
            </div>
            <div className='col-md-2 bg-info me-auto'>
              <img className='img-fluid rounded-start bg-primary' />
            </div>
            <div className='col-md-7 text-start ms-1'>
              <p className='text-muted'>
                Visi Microdigi <br />
                <h5 className='fw-bold text-dark'>
                  Sejuta umkm dan usaha makin <br />
                  berkembang di Indonesia
                </h5>
              </p>
            </div>
            <div className='col-md ms-5'>
              <p className='text-muted text-start'>
                Misi Microdigi <br />
                <h5 className='fw-bold text-dark'>
                  Untuk menghasilkan konten yang <br />
                  terbaik secara visual dan makna <br />
                  untuk pelanggan
                </h5>
              </p>
            </div>
          </div>
          <p className='text-muted'>
            Keunggulan Kami <br />
            <h3 className='fw-bold text-dark'>Kenapa harus microdigi?</h3>
          </p>
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Harga Terjangkau
                  </h5>
                  <p className='card-text text-muted'>
                    Tarif jasa yang dikenakan sudah lebih murah dari yang
                    dipasaran namun tetap berkualitas dan sesuai dengan
                    keinginan
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Harga Terjangkau
                  </h5>
                  <p className='card-text text-muted'>
                    Tarif jasa yang dikenakan sudah lebih murah dari yang
                    dipasaran namun tetap berkualitas dan sesuai dengan
                    keinginan
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Harga Terjangkau
                  </h5>
                  <p className='card-text text-muted'>
                    Tarif jasa yang dikenakan sudah lebih murah dari yang
                    dipasaran namun tetap berkualitas dan sesuai dengan
                    keinginan
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card h-100'>
                <div className='card-body text-start'>
                  <h5 className='card-title fw-bold text-dark'>
                    Harga Terjangkau
                  </h5>
                  <p className='card-text text-muted'>
                    Tarif jasa yang dikenakan sudah lebih murah dari yang
                    dipasaran namun tetap berkualitas dan sesuai dengan
                    keinginan
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
