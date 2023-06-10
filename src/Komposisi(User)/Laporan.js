import React, { Component, useState } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import dasboruser from "../Assets/dasboruser.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { HiDownload } from "react-icons/hi";
import { BiWallet } from "react-icons/bi";
import { TbSoccerField } from "react-icons/tb";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import moment from "moment";

import Sidebaruser from "../Komponen/Sidebar(login user)";

const Laporan = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [fromDate, setFromDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [toDate, setTodate] = useState(moment().format("YYYY-MM-DD"));

  const laporan = [
    {
      nama: "Transaksi Reservasi Fasilitas Anda",
    },
    {
      nama: "Daftar Promo yang sedang berjalan",
    },
    {
      nama: "Customer yang menukarkan promo",
    },
    {
      nama: "Daftar Tasks yang sedang berjalan",
    },
    {
      nama: "Customer yang mengerjakan tasks",
    },
  ];

  const handleShowModal = (nama) => {
    setShowModal(true);
    setNama(nama);
  };

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
            {laporan.map((item) => (
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <h5 className="text-dark fw-bold">{item.nama}</h5>
                </div>
                <div className="fs-5 me-1 flex-row fw-bold">
                  <Button
                    type="button"
                    className="me-4 text-dark fw-bold"
                    style={{
                      background: "#C4f601",
                      border: "1px solid #C4f601",
                    }}
                    onClick={() => handleShowModal(item.nama)}
                  >
                    <HiDownload className="fs-5 me-1 mb-1" />
                    Unduh
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <p style={{ fontSize: 24, fontWeight: "700" }}>
            Rekap Laporan {nama}
          </p>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3 mt-5">
              <InputGroup.Text>From Date</InputGroup.Text>
              <Form.Control
                type="date"
                placeholder="Select From Date"
                value={fromDate}
                onChange={(e) => {
                  const selectedDate = moment(e.target.value).format(
                    "YYYY-MM-DD"
                  );
                  setFromDate(selectedDate);
                }}
              />
              <InputGroup.Text>To Date</InputGroup.Text>
              <Form.Control
                type="date"
                placeholder="Select To Date"
                value={toDate}
                onChange={(e) => {
                  const selectedDate = moment(e.target.value).format(
                    "YYYY-MM-DD"
                  );
                  setTodate(selectedDate);
                }}
              />
            </InputGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="fw-bold text-dark"
            style={{
              background: "#F8F9FA",
              border: "1px solid #C4f601",
              borderRadius: "8px",
              width: "117px",
              height: "48px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setShowModal(false)}
          >
            Batal
          </Button>
          <Button
            type="button"
            className="me-4 text-dark fw-bold"
            style={{
              background: "#C4f601",
              border: "1px solid #C4f601",
            }}
          >
            <HiDownload className="fs-5 me-1 mb-1" />
            {isLoading ? "Loading…" : "Unduh"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Laporan);
