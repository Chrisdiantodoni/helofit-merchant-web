import React, { Component, useEffect, useState } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import { HiDownload } from "react-icons/hi";
import { Button } from "react-bootstrap";
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

  const [desiredStartDate, setDesiredStartDate] = useState();
  const [desiredEndDate, setDesiredEndDate] = useState();
  const downloadMeetup = async () => {
    const response = await AxiosAdmin.get(`/room`);
    console.log(response);
    if (response.data.message === "OK") {
      const { totalPages } = response?.data?.data?.room_info;
      const data = response?.data?.data?.room_info?.result;
      setMeetupData(data);
      const filteredData = data.filter((item) => {
        const createdAt = new Date(item.createdAt);
        const desiredStartDate = new Date("2023-01-01");
        const desiredEndDate = new Date("2023-12-31");

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
      link.download = `meetup ${desiredStartDate} - ${desiredEndDate}.xlsx`;
      link.click();
    }
  };

  const downloadUserData = async () => {
    const result = await AxiosAdmin.get(`/user`);
    console.log(result?.data?.data?.result);
    if (result?.data.message === "OK") {
      const { totalPages } = result?.data?.data;
      const data = result?.data?.data?.result;
      setDataUser(data);
      const filteredData = data.filter((item) => {
        const createdAt = new Date(item.createdAt);
        const desiredStartDate = new Date("2023-01-01");
        const desiredEndDate = new Date("2023-12-31");

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
      link.download = "data.xlsx";
      link.click();
    }
  };
  const downloadTaskData = async () => {
    const response = await AxiosAdmin.get(`/task`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.task_info?.result;
      const { totalPages } = response?.data?.data?.task_info;
      setTaskData(data);
    }
  };
  const downloadMerchantData = async () => {
    const response = await AxiosAdmin.get(`/merchant`);
    if (response.data?.message === "OK") {
      const data = response?.data?.data?.merchant.result;

      console.log(response?.data);
      setMerchantData(data);
    }
  };

  const downloadGetPromo = () => {};
  return (
    <div>
      <Navbaradmin konten="Laporan" />
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
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Rekap keseluruhan transaksi/reservasi
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data user pengguna Aplikasi
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data Merchant yang telah bergabung
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data meetup yang sudah dibuat
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                  onClick={downloadMeetup}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data Tasks yang telah berjalan
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div>
                <h5 className="text-dark fw-bold">
                  Data Promo yang sedang aktif
                </h5>
              </div>
              <div className="fs-5 me-1 flex-row fw-bold">
                <Button
                  type="button"
                  className="me-4 text-dark fw-bold"
                  style={{
                    background: "#C4f601",
                    border: "1px solid #C4f601",
                  }}
                >
                  <HiDownload className="fs-5 me-1 mb-1" />
                  Unduh
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="d-none">{"Username"}</span>
    </div>
  );
};

export default Laporan;
