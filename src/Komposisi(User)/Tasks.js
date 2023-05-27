import React, { Component, useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";
import moment from "moment";
import AddTask from "./AddTask";

import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios } from "../utils";

const Tasks = () => {
  const data = [
    {
      kode_task: "135780",
      judul: "Semangat Ma...",
      berlaku: "18/06/22",
      banner: "Lapangan 1",
      Task: ["Main ke 1", "Main ke 2", "Main ke 3"],
    },
  ];
  const data1 = [
    {
      tanggal: "12/06/22",
      nama: "hartono Lubis",
      no_hp: "082164896939",
      kode_task: "12345",
      status: "Selesai",
    },
  ];
  const dataMerchant = () => {
    const dataUser = localStorage.getItem("dataUser");
    const merchantId = JSON.parse(dataUser)?.id;
    getTask(merchantId, search);
    getTaskStatus(merchantId);
  };
  const dataUser = localStorage.getItem("dataUser");
  const merchantId = JSON.parse(dataUser)?.id;
  const [search, setSearch] = useState("");
  const [dataTask, setDataTask] = useState([]);
  const [statusTask, setStatusTask] = useState([]);

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

  const getTask = async (merchantId, search) => {
    const response = await Axios.get(
      `/task/${merchantId}?column_name=id&query=${search}`
    );
    const data = response.data?.data?.result;
    setDataTask(data || []);

    console.log(data);
  };
  const getTaskStatus = async (merchantId) => {
    const response = await Axios.get(
      `/task/list-task-user/${merchantId}?page=1&size=10`
    );
    const data = response?.data?.data?.result;
    setStatusTask(data);
    console.log(data);
  };

  const handleDeleteTask = async (id) => {
    const body = {
      merchantId: id.merchantId,
      taskId: id.taskId,
    };
    console.log(body);
    try {
      const response = await Axios.delete(`/task`, { data: body });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataMerchant();
  }, []);

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
                    placeholder="Ketikkan Kode Task.."
                    aria-label="Ketikkan Kode Task.."
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
                    onClick={() => getTask(merchantId, search)}
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
                          style={{ width: 430, height: 130 }}
                        />
                      </td>
                      <td>{moment(item.expiredIn).format("DD/MM/YY")}</td>
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
                          onClick={() =>
                            handleDeleteTask({
                              taskId: item.id,
                              merchantId: item.merchantId,
                            })
                          }
                        >
                          <Logo />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
            <div className="mt-5">
              <h4 className="text-dark fw-bold">Pengerjaan Task</h4>
              <h5 className="text-muted fw-bold">
                Berikut adalah list customer yang mengerjakan task
              </h5>
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
                  <th>Nama</th>
                  <th>No Hp</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              {/* {statusTask.map((item, idx) => (
                <tbody className="fw-bold">
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.phone_number}</td>
                    <td>
                      {console.log(item.list_task.list_user)}
                      {item.list_task.map((item) => {
                        const user = item.list_user;
                        return user;
                      }).length > 0
                        ? "Sedang Pengerjaan"
                        : "Selesai"}
                    </td>
                    <td>
                      <Link
                        to={{
                          pathname: `/welcome/DetailTask/`,
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
              ))} */}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Tasks);
