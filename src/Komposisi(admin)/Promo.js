import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";

const data = [
  {
    Judul: "Hartono Lubis",
    Expired: "12/05/2023",
    Poin_name: "Futsal",
    Banner: "../Assets/FotoMerchant.png",
    Merchant: "XYZ Futsal",
  },
  {
    Judul: "Hartono Lubis",
    Expired: "12/05/2023",
    Poin_name: "Futsal",
    Banner: "../Assets/FotoMerchant.png",
    Merchant: "XYZ Futsal",
  },
];

const Promo = () => {
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Promo</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data promo yang ditawarkan mitra
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
                    <th>Judul</th>
                    <th>Banner</th>
                    <th>Berlaku sampai</th>
                    <th>Poin yang ditukar</th>
                    <th>Merchant</th>
                  </tr>
                </thead>
                {data.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.Judul}</td>
                      <td>
                        <img
                          src="../Assets/FotoMerchant.png"
                          style={{ width: 84, height: 39 }}
                        />
                      </td>
                      <td>{item.Expired}</td>
                      <td>{item.Poin_name}</td>
                      <td>{item.Merchant}</td>
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

export default withRouter(Promo);
