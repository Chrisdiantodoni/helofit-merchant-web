import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Button } from "react-bootstrap";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";

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
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Banner Iklan</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Banner promo dalam kolom iklan di halaman pencarian mobile
              </h6>
            </div>

            <div className="mt-5 d-flex">
              <label>
                <h5 className="text-dark fw-bold">Ubah banner :</h5>
              </label>
              <div style={{ marginLeft: 50 }}>
                <input type="file" />
              </div>
              <Button
                className="fw-bold text-dark"
                style={{
                  background: "#DC3545",
                  border: "1px solid #DC3545",
                  borderRadius: "8px",
                  height: "40%",
                }}
              >
                <Logo />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Messages);
