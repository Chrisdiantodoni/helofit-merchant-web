import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, Button, Modal, Form, InputGroup } from "react-bootstrap";

import { useState } from "react";
import { AxiosAdmin } from "../utils";
import { useEffect } from "react";

const Merchant = () => {
  const [merchantData, setMerchantData] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const handleClose = () => setShow(false);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const getmerchantData = async (search = "", page = 1) => {
    const response = await AxiosAdmin.get(
      `/merchant/?page=${page}&size=${pageSize}&column_name=merchant_name&query=${search}`
    );
    if (response.data?.message === "OK") {
      const data = response?.data?.data?.merchant.result;
      const { totalPages } = response?.data?.data?.merchant;
      console.log(response?.data);
      setTotalPages(totalPages);
      setMerchantData(data);
    }
  };

  useEffect(() => {
    getmerchantData();
  }, []);

  const blockMerchant = async (id) => {
    await AxiosAdmin.put(`/merchant/${id}`, {
      status: status === "approved" ? "blocked" : "approved",
    })
      .then((res) => {
        if (res) {
          console.log(res);
          setShow(false);
          window.location.reload();
        }
      })
      .catch((res) => console.log(res));
  };

  const showingModal = (id, name, status) => {
    console.log(id, name, status);
    setShow(true);
    setId(id);
    setName(name);
    setStatus(status);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    getmerchantData(search, page);
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
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Mitra</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data mitra yang sudah bergabung
              </h6>
            </div>
            <InputGroup className="mb-3 mt-5 ">
              <Form.Control
                placeholder="Ketikkan Nama Merchant.."
                aria-label="Ketikkan Nama Merchant.."
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
                onClick={() => getmerchantData(search)}
              >
                Cari
              </Button>
            </InputGroup>
            <div className="justify-content-center d-flex mt-2">
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
                    <th>No</th>
                    <th>Nama Merchant</th>
                    <th>Lokasi</th>
                    <th>Deskripsi</th>
                    <th>Kategori</th>
                    <th>Foto Merchant</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                {merchantData.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{(currentPage - 1) * pageSize + idx + 1}</td>
                      <td>{item.merchant_name}</td>
                      <td>{item.address}</td>
                      <td>{item.desc}</td>
                      <td>
                        {item?.facilities
                          ?.map((item) => {
                            const category = item.category.category_name;
                            return category;
                          })
                          .join(", ")}
                      </td>
                      <td>
                        <img
                          src={item.img_merchant}
                          width="100%"
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </td>
                      <td>{item.status}</td>

                      <td>
                        {item.status === "blocked" ? (
                          <Button
                            className="fw-bold text-dark"
                            style={{
                              background: "#C4f601",
                              border: "1px solid #C4f601",
                              borderRadius: "8px",
                              width: "117px",
                              height: "30px",
                              justifyContent: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() =>
                              showingModal(
                                item.id,
                                item.merchant_name,
                                item.status
                              )
                            }
                          >
                            Approve
                          </Button>
                        ) : (
                          <Button
                            className="fw-bold text-light"
                            style={{
                              background: "#F3594F",
                              border: "1px solid #F3594F",
                              borderRadius: "8px",
                              width: "117px",
                              height: "30px",
                              justifyContent: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() =>
                              showingModal(
                                item.id,
                                item.merchant_name,
                                item.status
                              )
                            }
                          >
                            Blokir
                          </Button>
                        )}
                      </td>
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
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changePage(currentPage - 1)}
                  >
                    Prev
                  </a>
                </li>
                {getPaginationNumbers()}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{
          borderRadius: 16,
        }}
        size="sm"
      >
        <Modal.Footer
          style={{
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#F8F9FA",
            textAlign: "center",
          }}
        >
          <h5>
            Anda yakin
            {status === "blocked"
              ? " ingin membuka blokir "
              : " ingin memblokir"}{" "}
            {name}?
          </h5>
          <Button
            className="fw-bold"
            style={{
              background: "#F8F9FA",
              border:
                status === "blocked"
                  ? "1px solid #28A745"
                  : "1px solid #F3594F",
              borderRadius: "8px",
              width: "117px",
              height: "48px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: status === "blocked" ? "#28A745" : "#F3594F",
            }}
            onClick={handleClose}
          >
            Batal
          </Button>
          <Button
            className="fw-bold text-light"
            style={{
              background: status === "blocked" ? "#28A745" : "#F3594F",
              border:
                status === "blocked"
                  ? "1px solid #28A745"
                  : "1px solid #F3594F",
              borderRadius: "8px",
              width: "117px",
              height: "48px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => blockMerchant(id)}
          >
            {status === "blocked" ? "Approve" : "Blokir"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Merchant);
