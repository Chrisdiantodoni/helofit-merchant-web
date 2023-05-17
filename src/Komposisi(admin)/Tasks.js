import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";
import { AxiosAdmin } from "../utils";

const data = [
  {
    Judul: "Hartono Lubis",
    Banner: "Laki-laki",
    Deadline: "12/05/2023",
    Task: {
      Task1: "Main ke 1",
      Task2: "Main ke 2",
      Task3: "Main ke 3",
    },
    Merchant: "XYZ Futsal",
  },
  {
    Judul: "Hartono Lubis",
    Banner: "Laki-laki",
    Deadline: "12/05/2023",

    Task: {
      Task1: "Main ke 1",
      Task2: "Main ke 2",
      Task3: "Main ke 3",
    },
    Merchant: "XYZ Futsal",
  },
];

const Tasks = () => {
  const [taskData, setTaskData] = useState([]);

  const getTaskData = async () => {
    const response = await AxiosAdmin.get("/task");
    console.log(response);
    setTaskData(response?.data?.data?.task_info);
  };

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
          <div class="container">
            <h5 className="text-dark fw-bold">Data Task</h5>
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
                      <td>{item.task_name}</td>
                      <td>
                        <img
                          src={item.banner_img}
                          width="100%"
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </td>
                      <td>{item.expiredIn}</td>
                      {/* <td>{item.Task.Task1}</td>
                       */}
                      <td>{item.merchant?.merchant_name}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Tasks);
