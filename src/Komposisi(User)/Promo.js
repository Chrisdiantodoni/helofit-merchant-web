import React, { Component, useState, useContext, useEffect } from "react";

import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";
import { Context } from "./../context/index";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios, currency } from "../utils";
import moment from "moment";

const Promo = () => {
  const { merchantId } = useContext(Context);

  const [dataPromo, setDataPromo] = useState([]);
  const [userPromo, setPromoUser] = useState([]);
  const getPromo = async () => {
    const response = await Axios.get(`/promo/${merchantId}`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data;
      console.log(data);
      setDataPromo(data);
    }
  };
  const getPromoUser = async () => {
    const response = await Axios.get(`/promo/user/${merchantId}`);
    if (response.data.message === "OK") {
      console.log(response);
      const data = response?.data?.data;
      setPromoUser(data);
    }
  };

  const handleDeletePromo = async (id, e) => {
    try {
      await Axios.delete(`/promo/${id}`)
        .then((res) => {
          if (res) {
            console.log(res);
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPromo();
    getPromoUser();
  }, []);
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
                    placeholder="Ketikkan Kode Promo.."
                    aria-label="Ketikkan Kode Promo.."
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
                {dataPromo?.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.promo_name}</td>
                      <td>
                        <img
                          src={item.promo_img}
                          style={{
                            width: 430,
                            height: 130,
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{moment(item.ExpiredIn).format("DD/MM/YYYY")}</td>
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
                          <Link
                            to={{
                              pathname: `/welcome/EditPromo`,
                              state: { id: item.id },
                            }}
                          >
                            <LogoEdit />
                          </Link>
                        </Button>
                        <Button
                          className="fw-bold text-dark"
                          style={{
                            background: "#DC3545",
                            border: "1px solid #DC3545",
                            borderRadius: "8px",
                            height: "40%",
                          }}
                          onClick={() => handleDeletePromo(item.id)}
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
              {userPromo?.map((item, idx) => (
                <tbody className="fw-bold">
                  <tr>
                    <td>{moment(item.createdAt).format("DD/MM/YY")}</td>
                    <td>{item.user?.username}</td>
                    <td>{item.user?.phone_number}</td>
                    <td>{item.promo?.id}</td>
                    <td>{item.status_promo}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/welcome/DetailPromo`,
                          state: { id: item.id },
                        }}
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
};

export default withRouter(Promo);
