import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import {
  Table,
  Button,
  Modal,
  Form,
  InputGroup,
  Container,
} from "react-bootstrap";
import { AxiosAdmin } from "../utils";

const UserData = () => {
  const [dataUser, setDataUser] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  const getUserData = async (search = "", page = 1) => {
    const result = await AxiosAdmin.get(
      `/user/?page=${page}&size=${pageSize}&column_name=username&query=${search}`
    );
    console.log(result?.data?.data?.result);
    if (result?.data.message === "OK") {
      const { totalPages } = result?.data?.data;
      const data = result?.data?.data?.result;
      setDataUser(data);
      setTotalPages(totalPages);
    }
  };

  const handleShowModal = (id, status, name) => {
    setShow(true);
    setStatus(status);
    setName(name);
    setId(id);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    getUserData(search, page);
  };

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
        <div className="col-12 col-md-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-12 col-md-10 mt-5">
          <Container>
            <h5 className="text-dark fw-bold">Data User</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data pengguna aplikasi mobile
              </h6>
            </div>
            <div className="d-flex mt-5">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Ketikkan Nama User.."
                  aria-label="Ketikkan Nama User.."
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
                    getUserData(search, 1);
                  }}
                >
                  Cari
                </Button>
              </InputGroup>
            </div>
            <div className="justify-content-center d-flex mt-2">
              <Table responsive borderless>
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
                    <th>Username</th>
                    <th>Jenis Kelamin</th>
                    <th>No Handphone</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {dataUser?.map((item, idx) => (
                    <tr key={idx}>
                      <td>{(currentPage - 1) * pageSize + idx + 1}</td>
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
                              borderRadius: 8,
                              width: 117,
                              height: 30,
                              justifyContent: "center",
                              display: "flex",
                              alignItems: "center",
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
                              borderRadius: 8,
                              width: 117,
                              height: 30,
                              justifyContent: "center",
                              display: "flex",
                              alignItems: "center",
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
                  ))}
                </tbody>
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
          </Container>
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
              borderRadius: 8,
              width: 117,
              height: 48,
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
              borderRadius: 8,
              width: 117,
              height: 48,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
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
