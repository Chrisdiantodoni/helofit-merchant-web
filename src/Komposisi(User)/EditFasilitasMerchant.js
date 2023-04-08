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

class EditMerchant extends Component {
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
        <Navbaruser konten="Edit Fasilitas" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h5 className="text-dark fw-bold">Detail Fasilitas</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Tampilkan informasi fasilitas olahraga Anda
                </h6>
              </div>
              <Table borderless={true}>
                <tbody className="fw-bold">
                  <tr>
                    <td>Kategori</td>
                    <td>
                      <input style={{ borderRadius: 8 }} />
                    </td>
                  </tr>
                  <tr>
                    <td>Jumlah fasilitas</td>
                    <td>
                      <input style={{ borderRadius: 8 }} />
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Fasilitas</td>
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
                    <td>Tarif Fasilitas</td>
                    <td>
                      <input style={{ borderRadius: 8 }} /> per jam / Sesi
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
                  background: "#FFC107",
                  border: "1px solid #FFC107",
                  borderRadius: "8px",
                  width: "157px",
                  height: "48px",
                }}
              >
                Ubah
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditMerchant);
