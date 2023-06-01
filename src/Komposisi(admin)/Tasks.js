import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, Pagination } from "react-bootstrap";
import { AxiosAdmin } from "../utils";
import moment from "moment";

const Tasks = () => {
  const [taskData, setTaskData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const npage = Math.ceil(taskData.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const getTaskData = async () => {
    const response = await AxiosAdmin.get("/task");
    console.log(response);
    setTaskData(response?.data?.data?.task_info);
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
  const records = taskData.slice(firstIndex, lastIndex);

  useEffect(() => {
    getTaskData();
  }, []);
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
                    <th>Deadline</th>
                    {/* <th>Task 1</th>
                    <th>Task 2</th>
                    <th>Task 3</th> */}
                    <th>Merchant</th>
                  </tr>
                </thead>
                {records?.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
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
    </div>
  );
};

export default withRouter(Tasks);
