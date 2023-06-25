import React, { Component, useEffect, useState } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import { HiDownload } from "react-icons/hi";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import * as XLSX from "xlsx";
import { AxiosAdmin } from "../utils";
import moment from "moment";

const Laporan = () => {
  const [data, setData] = useState([]);
  const [meetupData, setMeetupData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [promo, setPromo] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [merchantData, setMerchantData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fromDate, setFromDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [isLoading, setLoading] = useState(false);
  const [toDate, setTodate] = useState(moment().format("YYYY-MM-DD"));
  const [nama, setNama] = useState("");
  const [type, setType] = useState("");
  const laporan = [
    {
      nama: "Rekap keseluruhan transaksi/reservasi",
      type: "transaksi",
    },
    {
      nama: "Data user pengguna Aplikasi",
      type: "user",
    },
    {
      nama: "Data Merchant yang telah bergabung",
      type: "merchant",
    },
    {
      nama: "Data meetup yang sudah dibuat",
      type: "meetup",
    },
    {
      nama: "Data Tasks yang telah berjalan",
      type: "task",
    },
  ];

  const handleDownload = (item) => {
    switch (item) {
      case "transaksi":
        downloadReserve(fromDate, toDate);
        console.log(item);
        break;
      case "user":
        downloadUserData(fromDate, toDate);
        console.log(item);
        break;
      case "merchant":
        downloadMerchantData(fromDate, toDate);
        console.log(item);
        break;
      case "meetup":
        console.log(item);
        break;
      case "task":
        downloadTaskData(fromDate, toDate);
        console.log(item);
        break;
      default:
        break;
    }
  };
  const handleShowModal = (nama, type) => {
    setShowModal(true);
    setNama(nama);
    setType(type);
  };
  const getBooking = async () => {
    const response = await AxiosAdmin.get(`/booking`);
    console.log(response);
  };
  useEffect(() => {
    getBooking();
  }, []);
  //booking bermasalah
  const downloadReserve = async (fromDate, toDate) => {
    const response = await AxiosAdmin.get(`/booking/all`);
    console.log(response);
    if (response?.data.message === "OK") {
      const data = response?.data?.data?.booking;
      console.log(data);
      setMeetupData(data);
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
      link.download = `Reserve Data ${fromDate} - ${toDate}.xlsx`;
      link.click();
    }
  };

  const downloadUserData = async (fromDate, toDate) => {
    const result = await AxiosAdmin.get(`/user`);
    console.log(result?.data?.data?.result);
    if (result?.data.message === "OK") {
      const data = result?.data?.data?.result;
      setDataUser(data);
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
      link.download = `Data User ${fromDate} - ${toDate}.xlsx`;
      link.click();
    }
  };
  const downloadTaskData = async (fromDate, toDate) => {
    const response = await AxiosAdmin.get(`/task`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.task_info?.result;
      setTaskData(data);
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
      link.download = `Data Task ${fromDate} - ${toDate}.xlsx`;
      link.click();
    }
  };
  const downloadMerchantData = async (fromDate, toDate) => {
    const response = await AxiosAdmin.get(`/merchant`);
    if (response.data?.message === "OK") {
      const data = response?.data?.data?.merchant.result;
      console.log(response?.data);
      setMerchantData(data);
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
      link.download = `Data Merchant ${fromDate} - ${toDate}.xlsx`;
      link.click();
    }
  };

  const downloadGetPromo = () => {};
  return (
    <div>
      <Navbaradmin konten="Laporan Admin" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
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
      <span className="d-none">{"Username"}</span>
    </div>
  );
};

export default Laporan;
