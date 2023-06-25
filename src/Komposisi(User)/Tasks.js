import React, { Component, useContext, useEffect, useState } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";
import moment from "moment";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios } from "../utils";
import { Context } from "./../context/index";
import currency from "./../utils/currency";

const Tasks = () => {
  const { merchantId } = useContext(Context);

  const dataUser = localStorage.getItem("dataUser");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const [dataTask, setDataTask] = useState([]);
  const [statusTask, setStatusTask] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [name, setName] = useState("");
  const [idTask, setIdTask] = useState("");
  const [idMerchant, setIdMerchant] = useState("");
  const [currentPageUser, setCurrentPageUser] = useState(1);
  const [searchTaskUser, setSearchTaskUser] = useState("");
  const [totalPagesUser, setTotalPagesUSer] = useState(0);
  const pageSizeUser = 10;
  // const getTask = async () => {
  //   const response = await Axios.get(
  //     `/task/${merchantId}?column_name=id&query=${search}`
  //   );
  //   const data = response.data?.data?.result;
  //   setDataTask(data || []);
  //   console.log(data);
  // };
  // const getTaskStatus = async (merchantId) => {
  //   const response = await Axios.get(
  //     `/task/list-task-user/${merchantId}?page=1&size=10`
  //   );
  //   const data = response?.data?.data?.result;
  //   setStatusTask(data);
  //   console.log(data);
  // };

  const getTask = async (search = "", page = 1) => {
    const response = await Axios.get(
      `/task/${merchantId}/?page=${page}&size=${pageSize}&column_name=task_name&query=${search}`
    );
    const data = response.data?.data?.result;
    const { totalPages } = response?.data?.data;
    setTotalPages(totalPages);
    if (response.data?.message === "OK") {
      setDataTask(data || []);
    }
    console.log(data);
  };
  const getTaskStatus = async (searchTaskUser = "", page = 1) => {
    const response = await Axios.get(
      `/task/list-task-user/${merchantId}/?page=${page}&size=${pageSizeUser}&column_name=username&query=${searchTaskUser}`
    );
    console.log(response);
    const data = response?.data?.data?.result;
    setStatusTask(data);
    const { totalPages } = response?.data?.data;
    setTotalPagesUSer(totalPages);
    console.log({ getTaskStatus: data });
  };

  const handleDeleteTask = async (item) => {
    const body = {
      merchantId: item?.merchantId,
      taskId: item?.idTask,
    };
    console.log(body);
    try {
      const response = await Axios.delete(`/task`, { data: body });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTaskStatus();
    getTask();
  }, []);

  const handleShowModal = (item) => {
    setShow(true);
    setName(item?.task_name);
    setIdTask(item?.id);
    setIdMerchant(item?.merchantId);
  };
  const changePage = (page) => {
    setCurrentPageUser(page);
    getTaskStatus(searchTaskUser, page);
  };

  const changePageTask = (page) => {
    setCurrentPage(page);
    getTask(search, page);
  };

  const getPaginationNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPagesUser; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPageUser === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => changePage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };
  const getPaginationNumbersTask = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => changePageTask(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div>
      <Navbaruser konten="List Task" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Daftar Task</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah list task yang dapat customer kerjakan
              </h6>

              <Link
                to="/welcome/AddTask"
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
                    placeholder="Ketikkan Nama Task.."
                    aria-label="Ketikkan Nama Task.."
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
                      getTask(merchantId, search);
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
                    <th>Kode Task</th>
                    <th>Judul</th>
                    <th>Banner</th>
                    <th>Berlaku s.d</th>
                    <th>Poin</th>
                    <th></th>
                  </tr>
                </thead>
                {dataTask?.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.task_name}</td>
                      <td>
                        <img
                          src={item.banner_img}
                          style={{
                            width: 430,
                            height: 130,
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{moment(item.expiredIn).format("DD/MM/YY")}</td>
                      <td>{currency(item.poin)}</td>
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
                              pathname: `/welcome/EditTask`,
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
            <div>
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => changePageTask(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                  </li>
                  {getPaginationNumbersTask()}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => changePageTask(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-5">
              <h4 className="text-dark fw-bold">Pengerjaan Task</h4>
              <h5 className="text-muted fw-bold">
                Berikut adalah list customer yang mengerjakan task
              </h5>
            </div>
            <div className="d-flex mt-5">
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Ketikkan Nama Customer.."
                  aria-label="Ketikkan Nama Customer.."
                  aria-describedby="basic-addon2"
                  value={searchTaskUser}
                  onChange={(e) => setSearchTaskUser(e.target.value)}
                />
                <Button
                  className="fw-bold"
                  style={{
                    background: "#C4f601",
                    color: "#000000",
                    border: "1px solid #C4f601",
                  }}
                  onClick={() => {
                    setCurrentPageUser(1);
                    getTaskStatus(merchantId, searchTaskUser, 1);
                  }}
                  id="button-addon2"
                >
                  Cari
                </Button>
              </InputGroup>
            </div>
            <Table className="mt-2" borderless={true}>
              <thead>
                <tr
                  className="fw-bold"
                  style={{
                    background: "#28A745",
                    color: "#FFFFFF",
                    borderRadius: 8,
                  }}
                >
                  <th>Nama</th>
                  <th>No Hp</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              {statusTask.map((item, idx) => (
                <tbody className="fw-bold">
                  <tr>
                    <td>{item.user?.username}</td>
                    <td>{item.user?.phone_number || "-"}</td>
                    <td>{item?.status}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/welcome/DetailTask/`,
                          state: {
                            idUser: item?.userId,
                            taskId: item?.taskId,
                            taskUserId: item?.id,
                          },
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
          </div>
          <nav>
            <ul className="pagination">
              <li
                className={`page-item ${
                  currentPageUser === 1 ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => changePage(currentPageUser - 1)}
                  disabled={currentPageUser === 1}
                >
                  Prev
                </button>
              </li>
              {getPaginationNumbers()}
              <li
                className={`page-item ${
                  currentPageUser === totalPagesUser ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => changePage(currentPageUser + 1)}
                  disabled={currentPageUser === totalPagesUser}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
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
          <h5>Anda yakin ingin menghapus Task {name}</h5>
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
            onClick={() =>
              handleDeleteTask({
                idTask,
                merchantId,
              })
            }
          >
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Tasks);
