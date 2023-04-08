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
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";

import Sidebaruser from "../Komponen/Sidebar(login user)";

class ProfilMerchant extends Component {
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
              <h5 className="text-dark fw-bold">Merchant</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Tampilkan informasi tempat olahraga Anda secara akurat
                </h6>

                <Link
                  to="/welcome/EditMerchant"
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
                  Ubah
                </Link>
              </div>
              <Table borderless={true}>
                <tbody className="fw-bold">
                  <tr>
                    <td>Nama Merchant</td>
                    <td>XYZ Futsal</td>
                  </tr>
                  <tr>
                    <td>Lokasi</td>
                    <td>Jl. MH Thamrin No.122 Medan</td>
                  </tr>
                  <tr>
                    <td>Deskripsi</td>
                    <td style={{ whiteSpace: "break-spaces" }}>
                      Yuk Main bersama di fasilitias ini Pelanggan Fasilitas
                      Olahraga yang terhormat Sebelum melakukan Reservasi baca
                      ketentuan kami sebagai berikut: Wajib menggunakan sepatu
                      ketika menggunakan fasilitas tidak membawa minuman keras
                      dan obatan terlarang..
                    </td>
                  </tr>
                  <tr>
                    <td>Foto Merchant</td>
                    <td>XYZ Futsal</td>
                  </tr>
                  <tr>
                    <td>Prasarana yang tersedia</td>
                    <td>
                      <h6 className="fw-bold">Sewa Peralatan Olahraga</h6>
                      <h6 className="fw-bold">Sewa Peralatan Olahraga</h6>
                      <h6 className="fw-bold">Sewa Peralatan Olahraga</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>Jadwal buka</td>
                    <td>
                      <h6 className="fw-bold">Senin - Minggu</h6>
                      <h6 className="fw-bold">09.00 - 20.00</h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div class="container">
              <h5 className="text-dark fw-bold">Detail Fasilitas</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Tampilkan informasi fasilitas olahraga Anda
                </h6>

                <Link
                  to="/welcome/EditFasilitasMerchant"
                  className="fw-bold text-dark btn d-flex"
                  style={{
                    background: "#C4f601",
                    border: "0.5px solid #C4f601",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Tambah Fasilitas
                </Link>
              </div>
              <Table borderless={true}>
                <tbody className="fw-bold">
                  <tr>
                    <td>Kategori</td>
                    <td>Badminton</td>
                  </tr>
                  <tr>
                    <td>Jumlah Fasilitas</td>
                    <td>2 Fasilitas</td>
                  </tr>
                </tbody>
              </Table>
              <div
                className="mt-4"
                style={{
                  background: "#F8f9fa",
                  padding: 24,
                  borderRadius: 16,
                  border: "1px solid #7c7c7c",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Table borderless={true}>
                    <tbody className="fw-bold">
                      <tr>
                        <td>Nama Fasilitas</td>
                        <td>Lapangan 1</td>
                      </tr>

                      <tr>
                        <td>Banner</td>
                        <td>Banner</td>
                      </tr>
                      <tr>
                        <td>Tarif</td>
                        <td>100.000/jam</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
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
                      <img />
                    </Button>
                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#DC3545",
                        border: "1px solid #DC3545",
                        borderRadius: "8px",
                        height: "40%",
                      }}
                    >
                      <Logo />
                      <img />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilMerchant);
