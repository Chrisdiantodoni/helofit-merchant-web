import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { AxiosAdmin } from "../utils";

const UserData = () => {
  const [dataUser, setDataUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const npage = Math.ceil(dataUser.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const getUserData = async () => {
    const result = await AxiosAdmin.get("/user");
    setDataUser(result?.data?.data?.user);
    console.log(result);
  };

  const handleShowModal = (id, status, name) => {
    setShow(true);
    setStatus(status);
    setName(name);
    setId(id);
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
  const records = dataUser.slice(firstIndex, lastIndex);

  const blockUser = async (id) => {
    await AxiosAdmin.put(`/user/${id}`, {
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

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data User</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data pengguna aplikasi mobile
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
                    <th>Username</th>
                    <th>Jenis Kelamin</th>
                    <th>No Handphone</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                {records.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.username}</td>
                      <td>{item.gender}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.email}</td>
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
                              handleShowModal(
                                item.id,
                                item.status,
                                item.username
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
                              handleShowModal(
                                item.id,
                                item.status,
                                item.username
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
            {" "}
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
            onClick={() => blockUser(id)}
          >
            {status === "blocked" ? "Approve" : "Blokir"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(UserData);
