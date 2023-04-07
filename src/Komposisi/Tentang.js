import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import Footer from "./Footer";
import Navbarbefore from "../Komponen/Navbar(before login)";
import doni from "../Assets/Doni.png";
import zulharmin from "../Assets/zulharmin.png";
import ilustrasitentang from "../Assets/ilustrasitentang.png";
class Tentang extends Component {
  render() {
    return (
      <div style={{ background: "#161616", height: "100%" }}>
        <Navbarbefore />
        <Container className="text-center mx-auto">
          <div className="row g-4 mt-3 mb-4">
            <div className="col-md-6 text-start ">
              <p>
                <h2 className="text-muted">Tentang Kami</h2>
                <h1 className="fw-bold text-light">Apa sih Helofit itu?</h1>
                <p className="card-text text-light">
                  Helofit adalah aplikasi berbasis mobile dan website yang
                  simple, modern, dan ringan bertujuan untuk menyatukan
                  orang-orang untuk melakukan olahraga demi menciptakan pola
                  hidup sehat di seluruh masyarakat Indonesia.
                </p>
              </p>
            </div>
            <div className="col-md-4 ">
              <img src={ilustrasitentang} height="272px" width="632px" />
            </div>
            <div className="col-md-6  text-start ms-1">
              <p className="text-muted text-start">
                <h3 className="fw-bold text-light">Visi Helofit</h3>
                <h2 className="fw-bold" style={{ color: "#7c7c7c" }}>
                  Puluhan juta pengguna di Indonesia merasakan manfaat aplikasi
                </h2>
              </p>
            </div>
            <div className="col-md">
              <p className="text-muted text-start">
                <h3 className="fw-bold text-light">Misi Taskita</h3>
                <h2 className="fw-bold" style={{ color: "#7c7c7c" }}>
                  Untuk membuat suatu budaya setiap individu baru agar lebih
                  sehat setiap harinya
                </h2>
              </p>
            </div>
          </div>
          <p className="text-muted pt-4">
            <h1 className="fw-bold text-light">Kenapa harus Helofit?</h1>
          </p>
          <div className="row row-cols-1 row-cols-md-4 g-4 pt-4">
            <div className="col">
              <div
                className="card h-100"
                style={{
                  border: "1px solid #FFFFFF",
                  borderRadius: 16,
                  background: "#161616",
                }}
              >
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold text-light">
                    Mudah Digunakan
                  </h5>
                  <p className="card-text text-light">
                    Gak ada kata ribet dalam kamus Taskita, karena aplikasi ini
                    mudah digunakan sesuai kebutuhanmu
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card h-100"
                style={{
                  border: "1px solid #FFFFFF",
                  borderRadius: 16,
                  background: "#161616",
                }}
              >
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold text-light">
                    Layanan gratis
                  </h5>
                  <p className="card-text text-light">
                    Untuk menggunakan fitur yang ada , kamu tidak perlu khawatir
                    karena semua fitur Taskita gratis
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card h-100"
                style={{
                  border: "1px solid #FFFFFF",
                  borderRadius: 16,
                  background: "#161616",
                }}
              >
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold text-light">
                    Tampilan Menarik
                  </h5>
                  <p className="card-text text-light">
                    Bukan cuma simpel, Taskita juga bikin kamu gak bosen dan
                    enak dilihat ketika menggunakannya.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card h-100"
                style={{
                  border: "1px solid #FFFFFF",
                  borderRadius: 16,
                  background: "#161616",
                }}
              >
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold text-light">Kecepatan</h5>
                  <p className="card-text text-light">
                    Untuk kecepatan Taskita gak usah diragukan lagi deh,
                    pokoknya anti lelet dan anti nunggu.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-3 g-4 mt-4 pt-4">
            <div className="col">
              <div className="pt-5 mt-5 text-start">
                <p className="text-muted">
                  <h3 className="fw-bold" style={{ color: "#7c7c7c" }}>
                    Team Kami
                  </h3>
                  <h2 className="fw-bold text-light">Berkenalan dengan Team</h2>
                </p>
              </div>
            </div>
            <div className="col">
              <div
                className="card h-100"
                style={{
                  borderRadius: 16,
                  border: "1px solid #FFFFFF",
                  background: "#000000",
                }}
              >
                <div style={{ background: "#dedede" }}>
                  <img
                    className="mx-auto d-inline-block"
                    src={doni}
                    height="200px"
                  />
                </div>
                <div className="card-body text-start">
                  <h4 className="card-text text-light fw bold">
                    Doni Chrisdianto K
                  </h4>
                  <p className="text-muted d-inline fw-bold">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card h-100"
                style={{
                  borderRadius: 16,
                  border: "1px solid #FFFFFF",
                  background: "#000000",
                }}
              >
                <div style={{ background: "#dedede" }}>
                  <img
                    className="mx-auto d-inline-block"
                    src={zulharmin}
                    height="200px"
                  />
                </div>
                <div className="card-body text-start">
                  <h4 className="card-text text-light fw-bold">Zulharmin</h4>
                  <p className="text-muted d-inline fw-bold">UI Designer</p>
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
