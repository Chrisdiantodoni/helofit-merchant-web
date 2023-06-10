import React, { Component, useContext, useState } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Button } from "react-bootstrap";
import { Context } from "../context/index";
import { Axios, currency } from "../utils";
import { useEffect } from "react";

const DompetMerchant = () => {
  const { merchantId } = useContext(Context);
  const [merchant, setMerchant] = useState({});
  const [nominal, setNominal] = useState("");

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
  useEffect(() => {
    getMerchant();
  }, []);

  const handleWithdraw = async (e) => {
    e.preventDefault();
    const body = {
      nominal,
    };
    if (nominal < parseInt(merchant?.balance)) {
      await Axios.put(`/wallet/withdraw/${merchantId}`, body).then((res) => {
        if (res) {
          window.alert("Uang berhasil ditarik");
        }
      });
    } else {
      window.alert("dompet tidak cukup");
    }
  };
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
            </div>
            <h5 className="text-dark fw-bold mt-5">Nominal Penarikan</h5>
            <div className="d-flex justify-content-between">
              <input
                className="mt-2"
                style={{ width: "636px", borderRadius: 8 }}
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>
            <h5 className="text-dark fw-bold mt-5">Transfer Ke Rekening</h5>
            <div className="d-flex justify-content-between">
              <Dropdown style={{ width: "332px" }}>
                <Dropdown.Toggle id="dropdown-basic">Bank BCA</Dropdown.Toggle>
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
                onClick={handleWithdraw}
              >
                Periksa
              </Button>
            </div>
            <div className="mt-5">
              <h3 className="fw-bold">
                Ketentuan Penarikan Saldo Dompet Merchant Anda
              </h3>
              <ol>
                <li className="fw-bold mt-2 fs-5">
                  Penarikan Kantong Donasimu akan diproses maksimal 2x24 jam di
                  hari kerja.
                </li>
                <li className="fw-bold mt-2 fs-5">
                  Minimal penarikan Rp100.000.
                </li>
                <li className="fw-bold mt-2 fs-5">
                  Pengembalian Kantong Donasimu dikenakan biaya admin bank.
                </li>
                <li className="fw-bold mt-2 fs-5">
                  Maksimal penarikan Kantong Donasimu Rp2.000.000 dalam 1 kali
                  transaksi 5. Jika request refund kamu melebihi Rp2.000.000,
                  hubungi kontak kami
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DompetMerchant);
