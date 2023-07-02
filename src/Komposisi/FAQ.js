import React from "react";
import Navbarbefore from "../Komponen/Navbar(before login)";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <div
      style={{
        background: "#000000",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbarbefore />
      <Container style={{ flex: 1, minHeight: "58vh" }}>
        <div className="container text-start">
          <h1 className="pt-5 text-light">Frequently Asked Questions (FAQ)</h1>
          <p className="fw-700" style={{ color: "#7c7c7c", fontWeight: "700" }}>
            Berikut adalah pertanyaan yang sering ditanyakan, semoga membantu
          </p>
          <ul className="faq-list" style={{ listStyleType: "none" }}>
            <li>
              <h3 style={{ color: "white" }}>
                Q: Apakah aplikasi mobile yang digunakan itu berbayar?
              </h3>
              <p style={{ color: "white" }}>
                A: Mengunduh aplikasi itu GRATIS, kamu akan bayar ketika akan
                melakukan meetup atau reservasi sesuai tarif fasilitas olahraga
                yang digunakan
              </p>
            </li>
            <li>
              <h3 style={{ color: "white" }}>
                Q: Apakah mitra fasilitas yang ingin bergabung dikenakan biaya?
              </h3>
              <p style={{ color: "white" }}>
                A: Mitra fasilitas tidak dikenakan biaya, tapi tim akan survey
                langsung ke tempat untuk memeriksa kelayakan fasilitas
              </p>
            </li>
            <li>
              <h3 style={{ color: "white" }}>
                Q: Untuk apa Aplikasi mobile dan website Helofit dibuat?
              </h3>
              <p style={{ color: "white" }}>
                A: Untuk memudahkan masyarakat Indonesia dalam menemukan teman
                olahraga dan sebagai syarat ketentuan Tugas Akhir Tim yang
                terkait (Zulharmin & Doni Chrisdianto)
              </p>
            </li>
          </ul>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQ;
