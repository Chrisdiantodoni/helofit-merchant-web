import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, Button, Modal, Form } from "react-bootstrap";

import { useState } from "react";
import { AxiosAdmin } from "../utils";
import { useEffect } from "react";

const Merchant = () => {
  const [merchantData, setMerchantData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const handleClose = () => setShow(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const npage = Math.ceil(merchantData.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const getmerchantData = async () => {
    const response = await AxiosAdmin.get("/merchant");
    setMerchantData(response?.data?.data?.merchant);
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
  const records = merchantData.slice(firstIndex, lastIndex);

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
                    <th>Nama Merchant</th>
                    <th>Lokasi</th>
                    <th>Deskripsi</th>
                    <th>Kategori</th>
                    <th>Foto Merchant</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                {records.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
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
