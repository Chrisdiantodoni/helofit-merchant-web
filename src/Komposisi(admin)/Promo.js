import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, InputGroup, Form, Button } from "react-bootstrap";
import { AxiosAdmin, currency } from "../utils";
import moment from "moment";

const Promo = () => {
  const [promo, setPromoData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const getPromo = async (search = "", page = 1) => {
    const response = await AxiosAdmin.get(
      `/promo/?page=${page}&size=${pageSize}&column_name=promo_name&query=${search}`
    );
    console.log(response);
    if (response.data.message === "OK") {
      const { totalPages } = response?.data?.data;
      const data = response?.data?.data?.result;
      setPromoData(data);
      setTotalPages(totalPages);
    }
  };

  useEffect(() => {
    getPromo();
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
    getPromo(search, page);
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
      <Navbaradmin konten="List Promo" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Promo</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data promo yang ditawarkan mitra
              </h6>
            </div>
            <div className="d-flex mt-5">
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Ketikkan Nama Promo.."
                  aria-label="Ketikkan Nama Promo.."
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
                    getPromo(search, 1);
                  }}
                >
                  Cari
                </Button>
              </InputGroup>
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
                    <th>Judul</th>
                    <th>Banner</th>
                    <th>Berlaku sampai</th>
                    <th>Poin yang ditukar</th>
                    <th>Merchant</th>
                  </tr>
                </thead>
                {promo?.map((item, idx) => (
                  <tbody key={idx} className="fw-bold">
                    <tr>
                      <td>{item.promo_name}</td>
                      <td>
                        <img
                          src={item.promo_img}
                          style={{ width: 84, height: 39 }}
                        />
                      </td>
                      <td>{moment(item.expiredIn).format("DD/MM/YYYY")}</td>
                      <td>{currency(item.point)}</td>
                      <td>{item.merchant?.merchant_name}</td>
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

export default withRouter(Promo);
