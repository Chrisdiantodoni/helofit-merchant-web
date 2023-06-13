import React, { Component, useState, useContext, useEffect } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { HiDownload } from "react-icons/hi";
import moment from "moment";
import { Context } from "../context/index";
import { Axios, currency } from "../utils";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import * as XLSX from "xlsx";
const Laporan = () => {
  const { merchantId } = useContext(Context);

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [type, setType] = useState("");
  const [fromDate, setFromDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [toDate, setTodate] = useState(moment().format("YYYY-MM-DD"));

  const laporan = [
    {
      nama: "Transaksi Reservasi Fasilitas Anda",
      type: "transaksi",
    },
    {
      nama: "Daftar Promo yang sedang berjalan",
      type: "daftarPromo",
    },
    {
      nama: "Customer yang menukarkan promo",
      type: "CustPromo",
    },
    {
      nama: "Daftar Tasks yang sedang berjalan",
      type: "Task",
    },
    {
      nama: "Customer yang mengerjakan tasks",
      type: "custTask",
    },
  ];

  const handleShowModal = (nama, type) => {
    setShowModal(true);
    setNama(nama);
    setType(type);
  };

  const handleDownload = (item) => {
    switch (item.toLowerCase()) {
      case "transaksi":
        getBooking(fromDate, toDate);
        console.log(item);
      case "daftarpromo":
        console.log(item);
      case "custpromo":
        console.log(item);
      case "task":
        console.log(item);
        break;
      case "custtask":
        console.log(item);
        break;

      default:
        break;
    }
  };

  const [reserveData, setReserveData] = useState([]);

  const getBooking = async (fromDate, toDate) => {
    const response = await Axios.get(`/booking/${merchantId}`);
    console.log(fromDate, toDate);
    if (response.data.message === "OK") {
      const data = response.data?.data;
      setReserveData(data);
      console.log(data);
      const filteredData = data.filter((item) => {
        const createdAt = moment(item.createdAt).format("YYYY-MM-DD");
        const desiredStartDate = moment(fromDate).format("YYYY-MM-DD");
        const desiredEndDate = moment(toDate).format("YYYY-MM-DD");

        return createdAt >= desiredStartDate && createdAt <= desiredEndDate;
      });
      const workbook = XLSX.utils.book_new();

      const worksheet = XLSX.utils.json_to_sheet(filteredData);

      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const excelBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const downloadLink = URL.createObjectURL(excelBlob);
      const link = document.createElement("a");
      link.href = downloadLink;
      link.download = `meetup ${fromDate} - ${toDate}.xlsx`;
      link.click();
    } else {
      console.log("Data Merchant tidak ada");
    }
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
                    onClick={() => handleShowModal(item.nama, item.type)}
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
            onClick={() => handleDownload(type)}
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
