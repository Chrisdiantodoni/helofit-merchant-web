import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import React, { Component } from "react";
import Footer from "../Komposisi/Footer.js";
import "./Beranda_2.css";
import Challenge from "../Assets/Challenge.png";
import Meetup from "../Assets/Meetup.png";
import Reservasi from "../Assets/Reservasi.png";
import TestimoniClara from "../Assets/TestimoniClara.png";
import TestimoniBudi from "../Assets/TestimoniBudi.png";
import TestimoniAndi from "../Assets/TestimoniAndi.png";
import ilustrasiDownload from "../Assets/IlustrasiDownload.png";

export default class Beranda_2 extends Component {
  render() {
    return (
      <Container className="text-center mx-auto">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div
              className="card h-100"
              style={{
                background: "#000000",
                border: "1px solid #FFFFFF",
                borderRadius: 16,
              }}
            >
              <div className="card-body text-start">
                <h5 className="card-title fw-bold text-light">
                  Mudah Digunakan
                </h5>
                <p className="card-text text-light">
                  Gak ada kata ribet dalam kamus Helofit, karena aplikasi ini
                  mudah digunakan dengan kebutuhanmu
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100"
              style={{
                background: "#000000",
                border: "1px solid #FFFFFF",
                borderRadius: 16,
              }}
            >
              <div className="card-body text-start">
                <h5 className="card-title fw-bold text-light">
                  Layanan gratis
                </h5>
                <p className="card-text text-light">
                  Temukan kemudahan Kamu dalam reservasi tanpa harus dapat ke
                  fasilitas Olahraga yang kamu inginkan
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100"
              style={{
                background: "#000000",
                border: "1px solid #FFFFFF",
                borderRadius: 16,
              }}
            >
              <div className="card-body text-start">
                <h5 className="card-title fw-bold  text-light">
                  Banyak Promo Menarik
                </h5>
                <p className="card-text  text-light">
                  Selesaikan task dan challenge yang diberikan lalu nikmati
                  semua promo yang ada sepuasnya
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100"
              style={{
                background: "#000000",
                border: "1px solid #FFFFFF",
                borderRadius: 16,
              }}
            >
              <div className="card-body text-start">
                <h5 className="card-title fw-bold  text-light">
                  Dapat Relasi Baru
                </h5>
                <p className="card-text  text-light">
                  Ketemu dengan teman baru dengan hobi yang sama dan jalin
                  relasi untuk tim olahraga Kamu
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="Layanan">
          <p className="text-light mt-3">
            <h1 className="fw-bold text-light">Bisa Apa Saja di Helofit?</h1>
          </p>
          <br />
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
            <div className="col-md-4">
              <div className="card h-100" style={{ borderRadius: 16 }}>
                <img
                  src={Meetup}
                  className="card-img-top"
                  height="auto"
                  width="auto"
                />
                <div className="card-body text-center">
                  <h4 className="card-text">Meetup Olahraga</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div className="card h-100" style={{ borderRadius: 16 }}>
                <img
                  src={Reservasi}
                  className="card-img-top"
                  height="auto"
                  width="auto"
                />
                <div className="card-body text-center">
                  <h4 className="card-text">Reservasi Fasilitas</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100" style={{ borderRadius: 16 }}>
                <img
                  src={Challenge}
                  className="card-img-top"
                  height="auto"
                  width="auto"
                />
                <div className="card-body text-center">
                  <h4 className="card-text">Mengerjakan Challenge</h4>
                </div>
              </div>
            </div>
          </div>
          <br />

          <br />
        </div>
        <div className="Testimoni ms-5 me-4">
          <p className="text-muted mb-4 mt-3">
            <h1 className="fw-bold text-light">Kata Mereka yang menggunakan</h1>
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div
                className="card h-100"
                style={{ borderRadius: 16, background: "#161616" }}
              >
                <img
                  src={TestimoniBudi}
                  className="card-img-top"
                  height="auto"
                  width="auto"
                />
                <div className="card-body text-start">
                  <h3 className="card-text text-light">
                    Budi Sanjaya, Karyawan
                  </h3>
                  <p className="text-light d-inline">
                    Helofit keren banget , bisa bikin aku mau booking lapangan
                    jadi gak perlu susah-susah lagi, tinggal buka app nya jadi
                    deh
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="card h-100"
                style={{ borderRadius: 16, background: "#161616" }}
              >
                <img
                  src={TestimoniClara}
                  className="card-img-top "
                  height="auto"
                  width="auto"
                />
                <div className="card-body text-start">
                  <h3 className="card-text text-light">
                    Clara Sinta, Mahasiswi
                  </h3>
                  <p className="text-light d-inline">
                    Sekarang aku makin giat latihan karena punya banyak temen
                    yang punya hobi yang sama dengan ku
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="card h-100"
                style={{ borderRadius: 16, background: "#161616" }}
              >
                <img
                  src={TestimoniAndi}
                  className="card-img-top"
                  height="auto"
                  width="auto"
                />
                <div className="card-body text-start text-light">
                  <h3 className="card-text">Andiansyah, Anak SMA</h3>
                  <p className="text-light d-inline">
                    Solusi banget deh helofit ini, cocok buat main sehabis
                    pulang sekolah atau hari libur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-3 p-4 pt-4 mt-4"
          style={{ background: "#C4F601" }}
        >
          <div className="row g-0 pt-2">
            <div className="col-md-7">
              <div className="card-body text-start">
                <h1 className="card-text text-dark fw-bold pb-4">
                  Temukan kemudahan olahraga hanya dengan aplikasi dalam
                  genggaman, Cobain Sekarang !
                </h1>

                <Button
                  style={{
                    borderRadius: "16px",
                    width: 434,
                    height: 80,
                    fontSize: 28,
                    fontWeight: "700",
                  }}
                  variant="dark"
                  size="lg"
                >
                  Download at Playstore
                </Button>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={ilustrasiDownload}
                style={{ width: 517, height: 266 }}
              />
            </div>
            {/* <div className='col-md-4 bg-secondary me-auto'>
                <img className='img-fluid rounded-start bg-primary' />
              </div> */}
          </div>
        </div>
        <Footer />
      </Container>
    );
  }
}
