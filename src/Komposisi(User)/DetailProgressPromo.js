import React, { Component, useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios, currency } from "../utils";
import moment from "moment";
import { useHistory } from "react-router-dom";

const DetailPromo = (props) => {
  const idUserPromo = props.location.state.id;
  console.log(idUserPromo);
  const [dataPromo, setDataPromo] = useState([]);
  const history = useHistory();
  const [statusPromo, setStatusPromo] = useState("");
  const getPromo = async () => {
    const response = await Axios.get(`/promo/detail-user/${idUserPromo}`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data;
      console.log(data);
      setDataPromo(data);
    }
  };
  const handleRadioChange = (event) => {
    setStatusPromo(event.target.value);
  };

  const updatePromo = async (id) => {
    const body = {
      status_promo: statusPromo,
    };
    await Axios.put(`/promo/detail/${id}`, body)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((error) => console.log(error));
    console.log({ body });
  };
  useEffect(() => {
    getPromo();
  }, []);
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
                      value={moment(dataPromo?.createdAt).format("DD/MM/YYYY")}
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
                      value={dataPromo?.user?.username}
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
                  <td>Kode Promo</td>
                  <td>
                    <input
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        fontWeight: "bold",
                        color: "#7C7C7C",
                      }}
                      value={dataPromo?.promo?.id}
                    />
                  </td>
                </tr>
                <tr>
                  <td>List Promo</td>
                  <td className="mb-3 d-flex" style={{ flexDirection: "row" }}>
                    <Form>
                      <div key="radio" className="mb-3 d-flex">
                        <Form.Check
                          type="radio"
                          id="belum-digunakan"
                          label="Belum Digunakan"
                          value="Belum Digunakan"
                          checked={statusPromo === "Belum Digunakan"}
                          onChange={handleRadioChange}
                        />
                        <Form.Check
                          type="radio"
                          id="sudah-digunakan"
                          label="Sudah Digunakan"
                          value="Sudah Digunakan"
                          checked={statusPromo === "Sudah Digunakan"}
                          onChange={handleRadioChange}
                        />
                      </div>
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
              onClick={() => history.goBack()}
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
              onClick={() => updatePromo(dataPromo?.id)}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DetailPromo);
