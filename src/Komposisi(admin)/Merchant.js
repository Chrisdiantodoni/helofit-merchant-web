import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";

const data = [
  {
    Nama: "Hartono Lubis",
    Lokasi: "Laki-laki",
    Deskripsi: "Ayo Main",
    Kategori: "Futsal",
    Foto: "../Assets/FotoMerchant.png",
  },
  {
    Nama: "Hartono Lubis",
    Lokasi: "Laki-laki",
    Deskripsi: "Ayo Main",
    Kategori: "Badminton",
    Foto: "../Assets/FotoMerchant.png",
  },
];

const Merchant = () => {
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Mitra</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data mitra yang sudah bergabung
              </h6>
            </div>

            <div className="justify-content-center d-flex mt-5">
              <Table borderless={true}>
                <thead>
                  <tr
                    className="fw-bold"
                    style={{
                      background: "#28A745",
                      color: "#FFFFFF",
                      borderRadius: 8,
                    }}
                  >
                    <th>Nama Merchant</th>
                    <th>Lokasi</th>
                    <th>Deskripsi</th>
                    <th>Kategori</th>
                    <th>Foto Merchant</th>
                  </tr>
                </thead>
                {data.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.Nama}</td>
                      <td>{item.Lokasi}</td>
                      <td>{item.Deskripsi}</td>
                      <td>{item.Kategori}</td>
                      <td>
                        <img
                          src="../Assets/FotoMerchant.png"
                          style={{ width: 84, height: 39 }}
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Merchant);
