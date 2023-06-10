import React, { Component, useContext } from "react";
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
import { Context } from "../context/index";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { useState } from "react";
import { Axios, currency } from "../utils";
import { useEffect } from "react";
import moment from "moment";

const Dompet = () => {
  const { merchantId } = useContext(Context);
  console.log(merchantId);

  const [merchant, setMerchant] = useState({});
  const [reserveData, setReserveData] = useState([]);

  const getMerchant = async () => {
    const response = await Axios.get(`/merchant/${merchantId}`);
    if (response.data.message === "OK") {
      const data = response.data?.data?.merchant_info;
      console.log(response);
      setMerchant(data);
    } else {
      console.log("Data Merchant tidak ada");
    }
  };
  const getBooking = async () => {
    const response = await Axios.get(`/booking/${merchantId}`);
    if (response.data.message === "OK") {
      const data = response.data?.data;
      setReserveData(data);
      console.log(data);
    } else {
      console.log("Data Merchant tidak ada");
    }
  };

  useEffect(() => {
    getMerchant();
    getBooking();
  }, []);
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
                Rp. {currency(merchant?.balance)}
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
              {reserveData?.map((item, idx) => (
                <tbody className="fw-bold">
                  <tr>
                    <td>{item.id}</td>
                    <td>{moment(item.booking_date).format("DD/MM/YYYY")}</td>
                    <td>{JSON.parse(item.time)}</td>
                    <td>{item.facility?.facility_name}</td>
                    <td>{item.user?.username}</td>
                    <td>{item.user?.phone_number}</td>
                    <td>Rp. {currency(item.total)}</td>
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

export default withRouter(Dompet);
