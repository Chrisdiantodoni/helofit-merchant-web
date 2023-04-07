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
import InputGroup from "react-bootstrap/InputGroup";

import Sidebaruser from "../Komponen/Sidebar(login user)";

class Dompet extends Component {
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
  render() {
    const { currentUser, sisa, kegiatan } = this.state;
    return (
      <div>
        <Navbaruser konten="Dompet Merchant" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h5 className="text-dark fw-bold">
                Saldo Dompet Merchant Saat ini
              </h5>
              <div className="d-flex justify-content-between">
                <h2 className=" fw-bold" style={{ color: "#28A745" }}>
                  Rp.220.000
                </h2>
                <Link
                  to="/welcome/TarikSaldo"
                  className="fw-bold text-dark btn d-flex"
                  style={{
                    background: "#C4f601",
                    border: "0.5px solid #C4f601",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "186px",
                    height: "56px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 16,
                  }}
                >
                  Tarik Saldo
                </Link>
              </div>

              <div className="mt-5">
                <h4 className="text-dark fw-bold">Daftar Transaksi</h4>
                <h5 className="text-muted fw-bold">
                  Berikut adalah list transaksi dari reservasi fasilitas
                </h5>
              </div>
              <div>
                <InputGroup className="mb-3 mt-5">
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
                    <th>Kode Reservasi</th>
                    <th>Tanggal</th>
                    <th>Jam</th>
                    <th>Fasilitas</th>
                    <th>Nama Customer</th>
                    <th>No Handphone</th>
                    <th>Total Biaya</th>
                  </tr>
                </thead>
                {this.data.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.kode_reservasi}</td>
                      <td>{item.tanggal}</td>
                      <td>{item.jam}</td>
                      <td>{item.fasilitas}</td>
                      <td>{item.nama_cust}</td>
                      <td>{item.no_hp}</td>
                      <td>{item.Total_Biaya}</td>
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

export default withRouter(Dompet);
