import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import dasboruser from "../Assets/dasboruser.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { HiDownload } from "react-icons/hi";
import { BiWallet } from "react-icons/bi";
import { TbSoccerField } from "react-icons/tb";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";

import Sidebaruser from "../Komponen/Sidebar(login user)";

class Laporan extends Component {
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
  render() {
    const { currentUser, sisa, kegiatan } = this.state;
    return (
      <div>
        <Navbaruser konten="Laporan Merchant" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h4 className="text-dark fw-bold">Unduh Laporan</h4>
              <h5 className="text-muted fw-bold">
                Berikut adalah laporan yang dapat diunduh dalam bentuk dokumen
              </h5>
              <div
                className="mt-4"
                style={{ background: "#000000", width: "100%", height: "4px" }}
              ></div>
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <h5 className="text-dark fw-bold">
                    Transaksi Reservasi Fasilitas Anda
                  </h5>
                </div>
                <div className="fs-5 me-1 flex-row fw-bold">
                  <Button
                    type="button"
                    className="me-4 text-dark fw-bold"
                    style={{
                      background: "#C4f601",
                      border: "1px solid #C4f601",
                    }}
                  >
                    <HiDownload className="fs-5 me-1 mb-1" />
                    Unduh
                  </Button>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <h5 className="text-dark fw-bold">
                    Daftar Promo yang sedang berjalan
                  </h5>
                </div>
                <div className="fs-5 me-1 flex-row fw-bold">
                  <Button
                    type="button"
                    className="me-4 text-dark fw-bold"
                    style={{
                      background: "#C4f601",
                      border: "1px solid #C4f601",
                    }}
                  >
                    <HiDownload className="fs-5 me-1 mb-1" />
                    Unduh
                  </Button>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <h5 className="text-dark fw-bold">
                    Customer yang menukarkan promo
                  </h5>
                </div>
                <div className="fs-5 me-1 flex-row fw-bold">
                  <Button
                    type="button"
                    className="me-4 text-dark fw-bold"
                    style={{
                      background: "#C4f601",
                      border: "1px solid #C4f601",
                    }}
                  >
                    <HiDownload className="fs-5 me-1 mb-1" />
                    Unduh
                  </Button>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <h5 className="text-dark fw-bold">
                    Daftar Tasks yang sedang berjalan
                  </h5>
                </div>
                <div className="fs-5 me-1 flex-row fw-bold">
                  <Button
                    type="button"
                    className="me-4 text-dark fw-bold"
                    style={{
                      background: "#C4f601",
                      border: "1px solid #C4f601",
                    }}
                  >
                    <HiDownload className="fs-5 me-1 mb-1" />
                    Unduh
                  </Button>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <h5 className="text-dark fw-bold">
                    Customer yang mengerjakan tasks
                  </h5>
                </div>
                <div className="fs-5 me-1 flex-row fw-bold">
                  <Button
                    type="button"
                    className="me-4 text-dark fw-bold"
                    style={{
                      background: "#C4f601",
                      border: "1px solid #C4f601",
                    }}
                  >
                    <HiDownload className="fs-5 me-1 mb-1" />
                    Unduh
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

export default withRouter(Laporan);
