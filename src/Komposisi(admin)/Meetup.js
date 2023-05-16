import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";

const data = [
  {
    Tanggal: "12/05/2023",
    Judul: "Gak Perlu jago",
    Kuota: 15,
    Host_Room: "Handoyo S",
    Jenis_Olahraga: "XYZ Futsal",
    Merchant: "XYZ Futsal",
    price: "Rp 100.000",
  },
  {
    Tanggal: "12/05/2023",
    Judul: "10.00",
    Kuota: 10,
    Host_Room: "Handoyo S",
    Jenis_Olahraga: "XYZ Futsal",
    Merchant: "XYZ Futsal",
    price: "Rp 100.000",
  },
];

const Meetup = () => {
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Meetup</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data meetup yang user lakukan
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
                    <th>Tanggal</th>
                    <th>Judul Meetup</th>
                    <th>Kuota</th>
                    <th>Host Room</th>
                    <th>Jenis Olahraga</th>
                    <th>Merchant</th>
                    <th>Total Biaya</th>
                  </tr>
                </thead>
                {data.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.Tanggal}</td>
                      <td>{item.Judul}</td>
                      <td>{item.Kuota}</td>
                      <td>{item.Host_Room}</td>
                      <td>{item.Jenis_Olahraga}</td>
                      <td>{item.Merchant}</td>
                      <td>{item.price}</td>
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

export default withRouter(Meetup);
