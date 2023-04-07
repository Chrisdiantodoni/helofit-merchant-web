import React from "react";
import Navbarbefore from "../Komponen/Navbar(before login)";
import { Container, Button } from "react-bootstrap";
import ilustrasiMeetup from "../Assets/Meetup.png";
import ilustrasiReservasi from "../Assets/Reservasi.png";
import ilustrasitask from "../Assets/Task.png";
import ilustrasiDownload from "../Assets/IlustrasiDownload.png";
import Footer from "./Footer";

const Fitur = (props) => {
  return (
    <div style={{ background: "#161616" }}>
      <Navbarbefore />
      <Container className="text-center mx-auto">
        <div className="row g-4 mt-3 mb-4">
          <div className="col-md-5 text-start ">
            <p>
              <h2 className="text-muted">Punya teman berolahraga</h2>
              <h1 className="fw-bold text-light">Meetup Olahraga</h1>
              <p
                className="card-text text-light fw-bold"
                style={{ fontSize: 20 }}
              >
                Temukan teman berolahraga kamu yang sesuai dengan olahraga yang
                kamu inginkan di tempat yang kamu mau dan dengan waktu yang
                sesuai dengan jadwal yang ditentukan.
              </p>
            </p>
          </div>
          <div className="col-md-7 sm-12 ">
            <img
              src={ilustrasiMeetup}
              height="100%"
              width="100%"
              style={{ borderRadius: 16 }}
            />
          </div>
        </div>
        <div className="row g-4 mt-3 mb-4">
          <div className="col-md-6 ">
            <img
              src={ilustrasiReservasi}
              height="100%"
              width="100%"
              style={{ borderRadius: 16 }}
            />
          </div>
          <div className="col-md-5 text-start ">
            <p>
              <h2 className="text-muted">Booking tempat lebih mudah</h2>
              <h1 className="fw-bold text-light">Reservasi Fasilitas</h1>
              <p className="card-text text-light fw-bold">
                Kamu tidak perlu datang ke tempat hanya untuk melakukan booking.
                Kamu juga bisa melihat status ketersediaan tempat dengan
                berbagai macam pilihan fasilitas olahraga.
              </p>
            </p>
          </div>
        </div>
        <div className="row g-4 mt-3 mb-4">
          <div className="col-md-5 text-start ">
            <p>
              <h2 className="text-muted">Bonus bagi penyuka tantangan</h2>
              <h1 className="fw-bold text-light">Mengerjakan Task</h1>
              <p
                className="card-text text-light fw-bold"
                style={{ fontSize: 20 }}
              >
                Bagi Kamu yang menyukai tantangan bisa mentuntaskan task yang
                diberikan untuk mendepatkan poin yang dapat ditukarkan dengan
                banyak promo menarik dari fasilitas olahraga yang tersedia.
              </p>
            </p>
          </div>
          <div className="col-md-7 ">
            <img
              src={ilustrasitask}
              height="100%"
              width="100%"
              style={{ borderRadius: 16 }}
            />
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
      </Container>
      <Footer />
    </div>
  );
};

Fitur.propTypes = {};

export default Fitur;
