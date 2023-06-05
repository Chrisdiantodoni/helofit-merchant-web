import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { AxiosAdmin } from "../utils";
import moment from "moment";

const Tasks = () => {
  const [taskData, setTaskData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  const getTaskData = async (search = "", page = 1) => {
    const response = await AxiosAdmin.get(
      `/task/?page=${page}&size=${pageSize}&column_name=task_name&query=${search}`
    );
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.task_info?.result;
      const { totalPages } = response?.data?.data?.task_info;
      setTotalPages(totalPages);
      setTaskData(data);
    }
  };
  const changePage = (page) => {
    setCurrentPage(page);
    getTaskData(search, page);
  };
  useEffect(() => {
    getTaskData();
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
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container justify-content-center">
            <h5 className="text-dark fw-bold">Data Task</h5>
            <div className="justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data mitra yang sudah bergabung
              </h6>
            </div>
            <div className="d-flex mt-5">
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
                  onClick={() => {
                    setCurrentPage(1);
                    getTaskData(search, 1);
                  }}
                  id="button-addon2"
                >
                  Cari
                </Button>
              </InputGroup>
            </div>
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
                    <th>Judul</th>
                    <th>Banner</th>
                    <th>Deadline</th>
                    {/* <th>Task 1</th>
                    <th>Task 2</th>
                    <th>Task 3</th> */}
                    <th>Merchant</th>
                  </tr>
                </thead>
                {taskData?.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{(currentPage - 1) * pageSize + idx + 1}</td>
                      <td>{item.task_name}</td>
                      <td>
                        <img
                          src={item.banner_img}
                          width="100%"
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </td>
                      <td>{moment(item.expiredIn).format("DD/MM/YYYY")}</td>
                      {/* <td>{item.Task.Task1}</td>
                       */}
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

export default withRouter(Tasks);
