import React, { Component } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import { HiDownload } from "react-icons/hi";
import { Button } from "react-bootstrap";

const Laporan = () => {
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h4 className="text-dark fw-bold">Unduh Laporan</h4>
            <h5 className="text-muted fw-bold">
              Berikut adalah laporan yang dapat diunduh dalam bentuk dokumen
            </h5>
            <div
              className="mt-4"
              style={{ background: "#000000", width: "100%", height: "4px" }}
            ></div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Rekap keseluruhan transaksi/reservasi
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data user pengguna Aplikasi
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data Merchant yang telah bergabung
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data meetup yang sudah dibuat
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data Tasks yang telah berjalan
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data Promo yang sedang aktif
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="d-none">{"Username"}</span>
    </div>
  );
};

export default Laporan;
