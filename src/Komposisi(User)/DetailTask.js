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

class DetailTask extends Component {
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
        <Navbaruser konten="Add Fasilitas" />
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebaruser />
          </div>
          <div className="col-10 mt-5">
            <div class="container">
              <h5 className="text-dark fw-bold">Pengerjaan Task</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Detail proses customer mengerjakan task
                </h6>
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
                    <td>List Task</td>
                    <td>
                      <Form>
                        {["Main ke 1", "Main ke 2", "Main ke 3"].map((type) => (
                          <div key={"default-checkbox"} className="mb-3">
                            <Form.Check
                              type={"checkbox"}
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

export default withRouter(DetailTask);
