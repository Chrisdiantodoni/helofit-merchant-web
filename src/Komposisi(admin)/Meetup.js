import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, InputGroup, Form, Button } from "react-bootstrap";
import { AxiosAdmin } from "../utils";
import moment from "moment";
import { currency } from "../utils";

const Meetup = () => {
  const [meetupData, setMeetupData] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const getMeetup = async (search = "", page = 1) => {
    const response = await AxiosAdmin.get(
      `/room/?page=${page}&size=${pageSize}&column_name=room_name&query=${search}`
    );
    console.log(response);
    if (response.data.message === "OK") {
      const { totalPages } = response?.data?.data?.room_info;
      const data = response?.data?.data?.room_info?.result;
      setMeetupData(data);
      setTotalPages(totalPages);
    }
  };

  useEffect(() => {
    getMeetup();
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
    getMeetup(search, page);
  };

  const getPaginationNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => changePage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div>
      <Navbaradmin konten="List Meetup" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Meetup</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data meetup yang user lakukan
              </h6>
            </div>
            <div className="d-flex mt-5">
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Ketikkan Nama Meetup.."
                  aria-label="Ketikkan Nama Meetup.."
                  aria-describedby="basic-addon2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  className="fw-bold"
                  style={{
                    background: "#C4f601",
                    color: "#000000",
                    border: "1px solid #C4f601",
                  }}
                  id="button-addon2"
                  onClick={() => {
                    setCurrentPage(1);
                    getMeetup(search, 1);
                  }}
                >
                  Cari
                </Button>
              </InputGroup>
            </div>
            <div className="justify-content-center d-flex mt-3">
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
                    <th>Judul Meetup</th>
                    <th>Kuota</th>
                    <th>Host Room</th>
                    <th>Jenis Olahraga</th>
                    <th>Merchant</th>
                    <th>Total Biaya</th>
                  </tr>
                </thead>
                {meetupData?.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{moment(item.booking_date).format("DD/MM/YYYY")}</td>
                      <td>{item.room_name}</td>
                      <td>{item.max_capacity}</td>
                      <td>{item?.user?.username}</td>
                      <td>{item?.facility?.category?.category_name}</td>
                      <td>{item?.facility?.merchant?.merchant_name}</td>
                      <td>Rp. {currency(item.booking?.total)}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
            <nav>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                </li>
                {getPaginationNumbers()}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Meetup);
