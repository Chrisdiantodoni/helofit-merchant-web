import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";

import Sidebaruser from "../Komponen/Sidebar(login user)";

class Promo extends Component {
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
      kode_task: "135780",
      judul: "Semangat Ma...",
      berlaku: "18/06/22",
      banner: "Lapangan 1",
      Task: ["Main ke 1", "Main ke 2", "Main ke 3"],
    },
  ];
  data1 = [
    {
      tanggal: "12/06/22",
      nama: "hartono Lubis",
      no_hp: "082164896939",
      kode_task: "12345",
      status: "Selesai",
    },
  ];
  render() {
    return (
      <div>
        <Navbaruser konten="List Promo" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h5 className="text-dark fw-bold">Daftar Promo</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Berikut adalah list promo yang Anda tawarkan ke customer
                </h6>

                <Link
                  to="/welcome/AddPromo"
                  className="fw-bold text-dark btn d-flex"
                  style={{
                    background: "#C4f601",
                    border: "0.5px solid #C4f601",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    paddingLeft: 40,
                    paddingRight: 40,
                  }}
                >
                  Tambah Data
                </Link>
              </div>
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
                  <InputGroup className="mb-3 ">
                    <Form.Control
                      placeholder="Ketikkan Kode Reservasi.."
                      aria-label="Ketikkan Kode Reservasi.."
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      className="fw-bold"
                      style={{
                        background: "#C4f601",
                        color: "#000000",
                        border: "1px solid #C4f601",
                      }}
                      id="button-addon2"
                    >
                      Cari
                    </Button>
                  </InputGroup>
                </div>
                <Table className="mt-5" borderless={true}>
                  <thead>
                    <tr
                      className="fw-bold"
                      style={{
                        background: "#28A745",
                        color: "#FFFFFF",
                        borderRadius: 8,
                      }}
                    >
                      <th>Kode Promo</th>
                      <th>Judul</th>
                      <th>Banner</th>
                      <th>Berlaku s.d</th>
                      <th></th>
                    </tr>
                  </thead>
                  {this.data.map((item, idx) => (
                    <tbody className="fw-bold">
                      <tr>
                        <td>{item.kode_task}</td>
                        <td>{item.judul}</td>
                        <td>{item.banner}</td>
                        <td>{item.berlaku}</td>
                        <td>
                          <Button
                            className="fw-bold text-dark me-4"
                            style={{
                              background: "#FFC107",
                              border: "1px solid #FFC107",
                              borderRadius: "8px",
                              height: "40%",
                            }}
                          >
                            <LogoEdit />
                          </Button>
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
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
              <div className="mt-5">
                <h4 className="text-dark fw-bold">Penukaran Task</h4>
                <h5 className="text-muted fw-bold">
                  Berikut adalah list customer yang telah menukarkan promonya
                </h5>
              </div>

              <Table className="mt-5" borderless={true}>
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
                    <th>Nama</th>
                    <th>No Hp</th>
                    <th>Kode Promo</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                {this.data1.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.tanggal}</td>
                      <td>{item.nama}</td>
                      <td>{item.no_hp}</td>
                      <td>{item.kode_task}</td>
                      <td>{item.status}</td>
                      <td>
                        <Link
                          to="/welcome/DetailPromo"
                          className="fw-bold text-dark btn d-flex"
                          style={{
                            background: "#C4f601",
                            border: "0.5px solid #C4f601",
                            justifyContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                          }}
                        >
                          Detail
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Promo);
