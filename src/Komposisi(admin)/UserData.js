import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";

const data = [
  {
    Nama: "Hartono Lubis",
    Jenis_Kelamin: "Laki-laki",
    Email: "hartono.lbs@gmail.com",
    Umur: "25 Tahun",
    No_handphone: "hartono.lbs@gmail.com",
  },
  {
    Nama: "Hartono Lubis",
    Jenis_Kelamin: "Laki-laki",
    Email: "hartono.lbs@gmail.com",
    Umur: "25 Tahun",
    No_handphone: "hartono.lbs@gmail.com",
  },
];

const UserData = () => {
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data User</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data pengguna aplikasi mobile
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
                    <th>Nama</th>
                    <th>Jenis Kelamin</th>
                    <th>Umur</th>
                    <th>No Handphone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                {data.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.Nama}</td>
                      <td>{item.Jenis_Kelamin}</td>
                      <td>{item.Umur}</td>
                      <td>{item.No_handphone}</td>
                      <td>{item.Email}</td>
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

export default withRouter(UserData);
