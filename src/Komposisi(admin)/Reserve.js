import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, InputGroup, Form } from "react-bootstrap";
import { AxiosAdmin, currency } from "../utils";
import moment from "moment";

const Reserve = () => {
  const [reserveData, setReserveData] = useState([]);
  const [fromDate, setFromDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [toDate, setTodate] = useState(moment().format("YYYY-MM-DD"));
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    getBooking(fromDate, toDate, currentPage);
  }, []);

  const getBooking = async (fromDate, toDate, page = 1) => {
    const formattedFromDate = moment(fromDate).format("YYYY-MM-DD");
    const formattedToDate = moment(toDate).format("YYYY-MM-DD");

    const response = await AxiosAdmin.get(
      `/booking/?page=${page}&size=${pageSize}&column_name=booking_date&fromDate=${formattedFromDate}&toDate=${formattedToDate}`
    );
    console.log(response);
    if (response.data?.message === "OK") {
      const { totalPages } = response.data.data?.booking;
      const data = response.data.data?.booking.result;
      setTotalPages(totalPages);
      setReserveData(data);
    }
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

  const changePage = (page) => {
    setCurrentPage(page);
    getBooking(fromDate, toDate, page);
  };

  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-12 col-md-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-12 col-md-8 mt-5">
          <div className="container">
            <h5 className="text-dark fw-bold">Data Reservasi</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data reservasi yang user lakukan
              </h6>
            </div>
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
                  getBooking(selectedDate, toDate, 1);
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
                  getBooking(fromDate, selectedDate, 1);
                }}
              />
            </InputGroup>
            <div className="table-responsive">
              <Table hover borderless>
                <thead>
                  <tr
                    className="text-white"
                    style={{
                      background: "#28A745",
                      color: "#FFFFFF",
                      borderRadius: 8,
                    }}
                  >
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Jam</th>
                    <th>Fasilitas</th>
                    <th>User</th>
                    <th>No Hp User</th>
                    <th>Merchant</th>
                    <th>Biaya</th>
                  </tr>
                </thead>
                <tbody>
                  {reserveData.map((item, idx) => (
                    <tr key={idx}>
                      <td>{(currentPage - 1) * pageSize + idx + 1}</td>
                      <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                      <td>
                        {item?.time
                          ? JSON.parse(item?.time)[0]
                          : JSON.parse(item?.time)[0]}
                      </td>
                      <td>{item.facility?.facility_name}</td>
                      <td>{item.user?.username}</td>
                      <td>{item.user?.phone_number}</td>
                      <td>{item?.facility?.merchant?.merchant_name}</td>
                      <td>Rp. {currency(item.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <nav>
              <ul className="pagination justify-content-center">
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

export default withRouter(Reserve);
