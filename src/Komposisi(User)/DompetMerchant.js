import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Button } from "react-bootstrap";

class DompetMerchant extends Component {
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
              </div>
              <h5 className="text-dark fw-bold mt-5">Nominal Penarikan</h5>
              <div className="d-flex justify-content-between">
                <input
                  className="mt-2"
                  style={{ width: "636px", borderRadius: 8 }}
                />
              </div>
              <h5 className="text-dark fw-bold mt-5">Transfer Ke Rekening</h5>
              <div className="d-flex justify-content-between">
                <Dropdown style={{ width: "332px" }}>
                  <Dropdown.Toggle id="dropdown-basic">
                    Bank BCA
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <h5 className="text-dark fw-bold mt-5">Nomor Rekening</h5>
              <div className="d-flex justify-content-start flex-direction-row align-items-center">
                <input
                  className="mt-2 me-2"
                  style={{ width: "636px", borderRadius: 8 }}
                />
                <Button
                  className="fw-bold mr-2"
                  style={{
                    background: "#C4f601",
                    width: "186px",
                    height: "56px",
                    border: "1px solid #C4f601",
                    borderRadius: 8, 
                  }}
                >
                  Periksa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DompetMerchant);
