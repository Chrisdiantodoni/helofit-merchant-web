import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Sidebaruser from "../Komponen/Sidebar(login user)";

class DetailPromo extends Component {
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
    return (
      <div>
        <Navbaruser konten="Detail Progress Promo" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h5 className="text-dark fw-bold">Detail Promo</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">Detail Progress Promo</h6>
              </div>
              <Table borderless={true}>
                <tbody className="fw-bold">
                  <tr>
                    <td>Tanggal Memulai</td>
                    <td>
                      <input
                        disabled={true}
                        style={{
                          borderRadius: 8,
                          fontWeight: "bold",
                          color: "#7C7C7C",
                        }}
                        value={"12/03/2023"}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Nama Customer</td>
                    <td>
                      <input
                        disabled={true}
                        style={{
                          borderRadius: 8,
                          fontWeight: "bold",
                          color: "#7C7C7C",
                        }}
                        value={"Hartono Lubis"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>No Handphone</td>
                    <td>
                      <input
                        disabled={true}
                        style={{
                          borderRadius: 8,
                          fontWeight: "bold",
                          color: "#7C7C7C",
                        }}
                        value={"082134567890"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Kode Task</td>
                    <td>
                      <input
                        disabled={true}
                        style={{
                          borderRadius: 8,
                          fontWeight: "bold",
                          color: "#7C7C7C",
                        }}
                        value={"12345"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>List Promo</td>
                    <td
                      className="mb-3 d-flex"
                      style={{ flexDirection: "row" }}
                    >
                      <Form>
                        {["Belum digunakan", "Sudah digunakan"].map((type) => (
                          <div key={"radio"} className="mb-3 d-flex">
                            <Form.Check
                              type={"radio"}
                              id={`{type}`}
                              label={`${type}`}
                            />
                          </div>
                        ))}
                      </Form>
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
  }
}

export default withRouter(DetailPromo);
