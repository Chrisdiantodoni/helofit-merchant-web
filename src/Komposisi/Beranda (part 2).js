import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import logo from "../Assets/logo.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import "./Beranda_2.css";
export default class Beranda_2 extends Component {
  render() {
    return (
      <Container className='text-center mx-auto'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          <div className='col'>
            <div className='card h-100'>
              <div className='card-body text-start'>
                <h5 className='card-title fw-bold text-dark'>
                  Harga Terjangkau
                </h5>
                <p className='card-text text-muted'>
                  Tarif jasa yang dikenakan sudah lebih murah dari yang
                  dipasaran namun tetap berkualitas dan sesuai dengan keinginan
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
                  dipasaran namun tetap berkualitas dan sesuai dengan keinginan
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
                  dipasaran namun tetap berkualitas dan sesuai dengan keinginan
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
                  dipasaran namun tetap berkualitas dan sesuai dengan keinginan
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='Layanan'>
          <p className='text-muted'>
            Layanan Kami <br />
            <h3 className='fw-bold text-dark'>Apa yang kamu butuhkan?</h3>
          </p>
          <br />
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-primary' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Desain Grafis</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-info' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Editing Video</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-warning' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Pembuatan Aplikasi</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-dark' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Voice Over</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-success' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Pembuatan Aplikasi</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-danger' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Digital Marketing</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='card mb-3 bg-dark p-4'>
            <div className='row g-0'>
              <div className='col-md-8'>
                <div className='card-body text-start'>
                  <h3 className='card-text text-light fw-bold'>
                    Penelitian mengatakan desain menarik <br /> dapat merangsang
                    kesadaran audience <br /> akan Brand Kamu
                  </h3>
                  <a className='btn btn-primary'>Konsultasi Sekarang</a>
                </div>
              </div>
              <div className='col-md-4 bg-secondary me-auto'>
                <img className='img-fluid rounded-start bg-primary' />
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className='Testimoni ms-5 me-4'>
          <p className='text-muted mb-4'>
            Testimoni Layanan <br />
            <h3 className='fw-bold text-dark'>Yang dikatakan Mereka</h3>
          </p>
          <div className='row row-cols-1 row-cols-md-3 g-3'>
            <div className='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-secondary' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Andi Suryadi, Pemilik Usaha</h4>
                  <p className='text-muted d-inline'>
                    Aku mulai langganan Microdigi karena konten-konten yang
                    dibuat gak pernah ngecewain deh, customer juga makin banyak,
                    kadang bisa selesai sebelum deadline
                  </p>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-dark' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Andi Suryadi, Pemilik Usaha</h4>
                  <p className='text-muted d-inline'>
                    Aku mulai langganan Microdigi karena konten-konten yang
                    dibuat gak pernah ngecewain deh, customer juga makin banyak,
                    kadang bisa selesai sebelum deadline
                  </p>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-danger' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Andi Suryadi, Pemilik Usaha</h4>
                  <p className='text-muted d-inline'>
                    Aku mulai langganan Microdigi karena konten-konten yang
                    dibuat gak pernah ngecewain deh, customer juga makin banyak,
                    kadang bisa selesai sebelum deadline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
