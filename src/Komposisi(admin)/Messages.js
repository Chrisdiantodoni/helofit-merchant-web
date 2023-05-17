import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";
import { AxiosAdmin } from "../utils";

const data = [
  {
    Nama: "Hartono Lubis",
    Email: "hartono.lbs@gmail.com",
    Pesan: "Keren banget websitenya",
  },
  {
    Nama: "Hartono Lubis",
    Email: "hartono.lbs@gmail.com",
    Pesan: "Keren banget websitenya",
  },
];

const Messages = () => {
  const [dataMessage, setDataMessage] = useState([]);

  const getMessages = async () => {
    const result = await AxiosAdmin.get("/message");
    setDataMessage(result?.data?.data?.message);
    console.log(result);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Pesan Masuk</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Pesan yang dikirimkan melalui halaman kontak
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
                    <th>Email</th>
                    <th>Pesan</th>
                  </tr>
                </thead>
                {dataMessage.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.message}</td>
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

export default withRouter(Messages);
