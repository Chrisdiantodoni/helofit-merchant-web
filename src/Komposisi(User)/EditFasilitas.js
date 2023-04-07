import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Table } from "react-bootstrap";

class EditFasilitas extends Component {
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
                  <h5 className="fw-bold text-dark col-10 md-6">
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
                </div>
                <div>
                  <Table
                    className="mt-3"
                    borderless={true}
                    style={{ textAlign: "center" }}
                  >
                    <thead>
                      <tr
                        className="fw-bold"
                        style={{ background: "#28A745", color: "#FFFFFF" }}
                      >
                        <th>JAM BERMAIN</th>
                        <th>STATUS</th>
                        <th>PEMAIN</th>
                      </tr>
                    </thead>
                    {this.data.map((item, idx) => (
                      <tbody className="fw-bold">
                        <tr>
                          <td>{item.jam}</td>
                          <td>{item.status}</td>
                          <td>
                            {item.status === "Terisi" ? item.Nama : <input />}
                          </td>
                        </tr>
                      </tbody>
                    ))}
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
                    className="fw-bold text-dark me-4"
                    style={{
                      background: "#c4f601",
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
        </div>
      </div>
    );
  }
}

export default withRouter(EditFasilitas);
