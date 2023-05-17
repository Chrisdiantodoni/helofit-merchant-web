import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { AxiosAdmin } from "../utils";

const data = [
  {
    Tanggal: "12/05/2023",
    Jam: "10.00",
    Fasilitas: "Lapangan 1",
    User: "Handoyo S",
    No_hp: "XYZ Futsal",
    Merchant: "XYZ Futsal",
    price: "Rp 100.000",
  },
  {
    Tanggal: "12/05/2023",
    Jam: "12/05/2023",
    Fasilitas: "Lapangan 2",
    User: "Handoyo S",
    No_hp: "XYZ Futsal",
    Merchant: "XYZ Futsal",
    price: "Rp 100.000",
  },
];

const Reserve = () => {
  const [reserveData, setReserveData] = useState([]);
  useEffect(() => {
    getbooking();
  });

  const getbooking = async () => {
    const response = await AxiosAdmin.get("/booking");
    console.log(response);
    setReserveData(response.data.data);
  };
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Reservasi</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data reservasi yang user lakukan
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
                    <th>Jam</th>
                    <th>Fasilitas</th>
                    <th>User</th>
                    <th>No Hp User</th>
                    <th>Merchant</th>
                    <th>Biaya</th>
                  </tr>
                </thead>
                {data.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.Tanggal}</td>
                      <td>{item.Jam}</td>
                      <td>{item.Fasilitas}</td>
                      <td>{item.User}</td>
                      <td>{item.No_hp}</td>
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

export default withRouter(Reserve);
