import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Sidebaruser from "../Komponen/Sidebar(login user)";

class Fasilitas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      kegiatan: 0,
      sisa: 0,
      nama_dpn: "",
    };
    this.CekNilai = this.CekNilai.bind(this);
  }
  CekNilai(nilai) {
    var result;
    if (nilai != null) {
      result = nilai;
    } else if (nilai == null) {
      result = 0;
    }
    return result;
  }
  // componentDidMount() {
  //   const { currentUser } = this.state;
  //   var userid = currentUser.id;
  //   fetch("http://localhost:8000/sisa/" + userid)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         sisa: res.sisa,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   fetch("http://localhost:8000/kegiatan/" + userid)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         kegiatan: res.kegiatan,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  data = [
    {
      jam: "09:00",
      status: "Terisi",
      Nama: "Andi Sanjaya",
      no_hp: "085297614911",
    },
    {
      jam: "09:00",
      status: "Terisi",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Terisi",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
    {
      jam: "09:00",
      status: "Tersedia",
      Nama: "Andi Sanjaya",
    },
  ];
  render() {
    const { currentUser, sisa, kegiatan } = this.state;
    return (
      <div>
        <Navbaruser konten="Fasilitas Merchant" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h4 className="text-dark fw-bold">Daftar Fasilitas</h4>
              <h5 className="text-muted fw-bold">
                Pantau aktivitas terkini dari fasilitas yang kamu miliki
              </h5>

              <div
                className="mt-4"
                style={{
                  background: "#F8f9fa",
                  padding: 24,
                  borderRadius: 16,
                  border: "1px solid #7c7c7c",
                }}
              >
                <div className="d-flex ">
                  <h5 className="fw-bold text-dark col-8 md-6">
                    Badminton - Lapangan 1
                  </h5>
                  <Dropdown className="col-2 sm-2 md-5">
                    <Dropdown.Toggle
                      className="fw-bold text-dark"
                      id="dropdown-basic"
                      style={{
                        background: "#FFFFFF",
                        border: "0.5px solid #7c7c7c",
                      }}
                    >
                      Minggu 1
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Minggu 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Minggu 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Minggu 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Link
                    to="/welcome/EditFasilitas"
                    className="fw-bold text-dark btn"
                    style={{
                      background: "#C4f601",
                      border: "0.5px solid #C4f601",
                    }}
                  >
                    Ubah
                  </Link>
                </div>
                <div
                  className="d-grid mt-5"
                  style={{
                    gridTemplateColumns: "repeat(6, 1fr)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {this.data.map((item, idx) => (
                    <div
                      style={{
                        padding: "10px",
                      }}
                    >
                      <div
                        style={{
                          background:
                            item.status === "Terisi" ? "#7c7c7c" : "#28A745",
                          borderRadius: 8,
                          width: "110px",
                          height: "55px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="text-light fw-bold">{item.jam}</h5>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <h6
                          className="mt-2 fw-bold"
                          style={{ textAlign: "center" }}
                        >
                          {item.status === "Terisi" ? item.Nama : item.status}
                        </h6>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <h6
                          className="mt-2 fw-bold"
                          style={{ textAlign: "center" }}
                        >
                          {item.no_hp}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Fasilitas);
