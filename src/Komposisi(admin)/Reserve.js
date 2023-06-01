import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { AxiosAdmin } from "../utils";
import moment from "moment";

const data = [
  {
    Tanggal: "12/05/2023",
    Jam: "10.00",
    Fasilitas: "Lapangan 1",
    User: "Handoyo S",
    No_hp: "XYZ Futsal",
    Merchant: "XYZ Futsal",
    price: "Rp 100.000",
  },
  {
    Tanggal: "12/05/2023",
    Jam: "12/05/2023",
    Fasilitas: "Lapangan 2",
    User: "Handoyo S",
    No_hp: "XYZ Futsal",
    Merchant: "XYZ Futsal",
    price: "Rp 100.000",
  },
];

const Reserve = () => {
  const [reserveData, setReserveData] = useState([]);
  useEffect(() => {
    getbooking();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const npage = Math.ceil(reserveData.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const getbooking = async () => {
    const response = await AxiosAdmin.get("/booking");
    const data = response.data.data?.booking;
    if (response.data?.message === "OK") {
      setReserveData(data);
      console.log(data);
    }
  };

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const records = reserveData.slice(firstIndex, lastIndex);
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Reservasi</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data reservasi yang user lakukan
              </h6>
            </div>

            <div className="justify-content-center d-flex mt-5">
              <Table borderless={true}>
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
                    <th>Jam</th>
                    <th>Fasilitas</th>
                    <th>User</th>
                    <th>No Hp User</th>
                    <th>Merchant</th>
                    <th>Biaya</th>
                  </tr>
                </thead>
                {records.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                      <td>
                        {item?.time
                          ? JSON.parse(item?.time)[0]
                          : JSON.parse(item?.time)[0]}
                      </td>
                      <td>{item.facility?.facility_name}</td>
                      <td>{item.user?.username}</td>
                      <td>{item.user?.phone_number}</td>
                      <td>{"Belum"}</td>
                      <td>{item.total}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" onClick={prePage}>
                    Prev
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    key={i}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => changeCPage(n)}
                    >
                      {n}
                    </a>
                  </li>
                ))}
                <li className="page-item">
                  <a href="#" className="page-link" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Reserve);
