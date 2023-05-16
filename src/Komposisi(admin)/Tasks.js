import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";

const data = [
  {
    Judul: "Hartono Lubis",
    Banner: "Laki-laki",
    Deadline: "12/05/2023",
    Task: {
      Task1: "Main ke 1",
      Task2: "Main ke 2",
      Task3: "Main ke 3",
    },
    Merchant: "XYZ Futsal",
  },
  {
    Judul: "Hartono Lubis",
    Banner: "Laki-laki",
    Deadline: "12/05/2023",

    Task: {
      Task1: "Main ke 1",
      Task2: "Main ke 2",
      Task3: "Main ke 3",
    },
    Merchant: "XYZ Futsal",
  },
];

const Tasks = () => {
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Task</h5>
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
                    <th>Judul</th>
                    <th>Banner</th>
                    <th>Deadline</th>
                    <th>Task 1</th>
                    <th>Task 2</th>
                    <th>Task 3</th>
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
                      <td>{item.Deadline}</td>
                      <td>{item.Task.Task1}</td>
                      <td>{item.Task.Task2}</td>
                      <td>{item.Task.Task3}</td>
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

export default withRouter(Tasks);
