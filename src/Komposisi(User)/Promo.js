import React, { Component, useState, useContext, useEffect } from "react";

import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";
import { Context } from "./../context/index";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios, currency } from "../utils";
import moment from "moment";

const Promo = () => {
  const { merchantId } = useContext(Context);
  const [name, setName] = useState("");
  const [idPromo, setIdPromo] = useState("");
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const [dataPromo, setDataPromo] = useState([]);
  const [userPromo, setPromoUser] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [currentPageUser, setCurrentPageUser] = useState(1);
  const [totalPagesUser, setTotalPagesUser] = useState(0);
  const pageSizeUser = 10;
  const getPromo = async (search = "", page = 1) => {
    const response = await Axios.get(
      `/promo/${merchantId}/?page=${page}&size=${pageSize}&column_name=promo_name&query=${search}`
    );
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.result;
      const { totalPages } = response?.data?.data;
      setTotalPages(totalPages);
      console.log(data);
      setDataPromo(data);
    }
  };
  const handleClose = () => setShow(false);

  const getPromoUser = async (searchUser = "", page = 1) => {
    const response = await Axios.get(
      `/promo/user/${merchantId}/?page=${page}&size=${pageSizeUser}&column_name=username&query=${searchUser}`
    );
    console.log(response);

    if (response.data.message === "OK") {
      const data = response?.data?.data.result;
      const { totalPages } = response?.data?.data;
      setTotalPagesUser(totalPages);
      setPromoUser(data);
    }
  };

  const handleDeletePromo = async (idPromo) => {
    console.log(idPromo);
    try {
      await Axios.delete(`/promo/${idPromo}`)
        .then((res) => {
          if (res) {
            console.log(res);
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPromo();
    getPromoUser();
  }, []);

  const handleShowModal = (item) => {
    setShow(true);
    setName(item?.promo_name);
    setIdPromo(item?.id);
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
  const getPaginationUser = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPagesUser; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPageUser === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => changePageUser(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  const changePage = (page) => {
    setCurrentPage(page);
    getPromo(search, page);
  };

  const changePageUser = (page) => {
    setCurrentPageUser(page);
    getPromoUser(searchUser, page);
  };
  return (
    <div>
      <Navbaruser konten="List Promo" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h4 className="text-dark fw-bold">Daftar Promo</h4>
            <div className="d-flex justify-content-between">
              <h5 className="text-muted fw-bold">
                Berikut adalah list promo yang Anda tawarkan ke customer
              </h5>

              <Link
                to="/welcome/AddPromo"
                className="fw-bold text-dark btn d-flex"
                style={{
                  background: "#C4f601",
                  border: "0.5px solid #C4f601",
                  justifyContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                Tambah Data
              </Link>
            </div>
            <div
              className="mt-4"
              style={{
                background: "#F8f9fa",
                padding: 24,
                borderRadius: 16,
                border: "1px solid #7c7c7c",
              }}
            >
              <div className="d-flex ">
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
                      getPromo(search, 1);
                      setCurrentPage(1);
                    }}
                  >
                    Cari
                  </Button>
                </InputGroup>
              </div>
              <Table className="mt-5" borderless={true}>
                <thead>
                  <tr
                    className="fw-bold"
                    style={{
                      background: "#28A745",
                      color: "#FFFFFF",
                      borderRadius: 8,
                    }}
                  >
                    <th>Kode Promo</th>
                    <th>Judul</th>
                    <th>Banner</th>
                    <th>Berlaku s.d</th>
                    <th></th>
                  </tr>
                </thead>
                {dataPromo?.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.promo_name}</td>
                      <td>
                        <img
                          src={item.promo_img}
                          style={{
                            width: 430,
                            height: 130,
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{moment(item.ExpiredIn).format("DD/MM/YYYY")}</td>
                      <td>
                        <Button
                          className="fw-bold text-dark me-4"
                          style={{
                            background: "#FFC107",
                            border: "1px solid #FFC107",
                            borderRadius: "8px",
                            height: "40%",
                          }}
                        >
                          <Link
                            to={{
                              pathname: `/welcome/EditPromo`,
                              state: { id: item.id },
                            }}
                          >
                            <LogoEdit />
                          </Link>
                        </Button>
                        <Button
                          className="fw-bold text-dark"
                          style={{
                            background: "#DC3545",
                            border: "1px solid #DC3545",
                            borderRadius: "8px",
                            height: "40%",
                          }}
                          onClick={() => handleShowModal(item)}
                        >
                          <Logo />
                        </Button>
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
            <div className="mt-5">
              <h4 className="text-dark fw-bold">Penukaran Task</h4>
              <h5 className="text-muted fw-bold">
                Berikut adalah list customer yang telah menukarkan promonya
              </h5>
            </div>
            <div className="d-flex ">
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Ketikkan Nama Customer"
                  aria-label="Ketikkan Nama Customer"
                  aria-describedby="basic-addon2"
                  value={searchUser}
                  onChange={(e) => setSearchUser(e.target.value)}
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
                    getPromoUser(searchUser, 1);
                    setCurrentPageUser(1);
                  }}
                >
                  Cari
                </Button>
              </InputGroup>
            </div>
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
                  <th>Nama</th>
                  <th>No Hp</th>
                  <th>Kode Promo</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              {userPromo?.map((item, idx) => (
                <tbody className="fw-bold">
                  <tr>
                    <td>{moment(item.createdAt).format("DD/MM/YY")}</td>
                    <td>{item.user?.username}</td>
                    <td>{item.user?.phone_number}</td>
                    <td>{item.promo?.id}</td>
                    <td>{item.status_promo}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/welcome/DetailPromo`,
                          state: { id: item.id },
                        }}
                        className="fw-bold text-dark btn d-flex"
                        style={{
                          background: "#C4f601",
                          border: "0.5px solid #C4f601",
                          justifyContent: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 8,
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            <nav>
              <ul className="pagination">
                <li
                  className={`page-item ${
                    currentPageUser === 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => changePageUser(currentPageUser - 1)}
                    disabled={currentPageUser === 1}
                  >
                    Prev
                  </button>
                </li>
                {getPaginationUser()}
                <li
                  className={`page-item ${
                    currentPageUser === totalPagesUser ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => changePageUser(currentPageUser + 1)}
                    disabled={currentPageUser === totalPagesUser}
                  >
                    Next
                  </button>
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
      >
        <Modal.Footer
          style={{
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#F8F9FA",
            textAlign: "center",
          }}
        >
          <h5>Anda yakin ingin menghapus Promo {name}</h5>
          <Button
            className="fw-bold"
            style={{
              background: "#7C7C7C",
              borderColor: "1px solid #7c7c7c",
              borderRadius: 8,
              width: 117,
              height: 48,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleClose}
          >
            Batal
          </Button>
          <Button
            className="fw-bold text-light"
            style={{
              borderRadius: 8,
              background: "#F3594F",
              borderColor: "1px solid #F3594F",
              width: 117,
              height: 48,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleDeletePromo(idPromo)}
          >
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Promo);
