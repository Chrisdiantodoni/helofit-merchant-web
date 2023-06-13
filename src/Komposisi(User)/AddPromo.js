import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";

import Sidebaruser from "../Komponen/Sidebar(login user)";

const AddPromo = () => {
  const data = [
    {
      kode_reservasi: "135780",
      tanggal: "12/06/22",
      jam: "17:00",
      fasilitas: "Lapangan 1",
      nama_cust: "Rudi Suprapto",
      no_hp: "085297614911",
      Total_Biaya: "Rp.100.000",
    },
    {
      kode_reservasi: "135780",
      tanggal: "12/06/22",
      jam: "17:00",
      fasilitas: "Lapangan 1",
      nama_cust: "Rudi Suprapto",
      no_hp: "085297614911",
      Total_Biaya: "Rp.100.000",
    },
  ];

  return (
    <div>
      <Navbaruser konten="Add Promo" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Tambah Promo</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikan promo yang Anda tawarkan ke customer
              </h6>
            </div>
            <Table borderless={true}>
              <tbody className="fw-bold">
                <tr>
                  <td>Tambah task</td>
                  <td>
                    <input style={{ borderRadius: 8 }} />
                  </td>
                </tr>

                <tr>
                  <td>Banner</td>
                  <td>
                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#c4f601",
                        border: "1px solid #C4f601",
                        borderRadius: "8px",
                        width: "157px",
                        height: "48px",
                      }}
                    >
                      Tambah Foto
                    </Button>
                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#DC3545",
                        border: "1px solid #DC3545",
                        borderRadius: "8px",
                      }}
                    >
                      <Logo />
                      <img />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Berlaku Sampai</td>
                  <td>
                    <input style={{ borderRadius: 8 }} />
                  </td>
                </tr>
                <tr>
                  <td>Task ke-1</td>
                  <td>
                    <input style={{ borderRadius: 8 }} />
                  </td>
                </tr>

                <tr>
                  <td>Besarnya Biaya Potongan</td>
                  <td>
                    <input style={{ borderRadius: 8 }} /> per Promo
                  </td>
                </tr>
                <tr>
                  <td>Poin yang ditukarkan</td>
                  <td>
                    <input
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        border: "none",
                        backgroundColor: "#D9D9D9",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              className="fw-bold text-dark me-4"
              style={{
                background: "#F8F9FA",
                border: "1px solid #161616",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
            >
              Batal
            </Button>
            <Button
              className="fw-bold text-dark me-4 mb-5"
              style={{
                background: "#C4f601",
                border: "1px solid #C4f601",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddPromo);
