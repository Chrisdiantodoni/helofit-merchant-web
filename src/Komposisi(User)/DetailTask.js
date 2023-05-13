import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";
import moment from "moment";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios } from "../utils";
import { useEffect } from "react";
import { useState } from "react";

const DetailTask = (props) => {
  const data = props.location.state.id;

  const [dataTask, setDataTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [expiredIn, setExpiredIn] = useState(new Date());
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [banner, selectedBanner] = useState(null);

  console.log(data);
  const dataMerchantLocal = () => {
    const dataUser = localStorage.getItem("dataUser");
    console.log(JSON.parse(dataUser)?.id);
    const merchantId = JSON.parse(dataUser)?.id;
    getDetailTask(merchantId);
  };

  useEffect(() => {
    dataMerchantLocal();
  }, []);

  const getDetailTask = async (id) => {
    const response = await Axios.get(`/task/detail/${id}`);
    const data = response?.data?.data?.result;
    setDataTask(data || {});
    console.log(data);
  };

  useEffect(() => {
    getDetailTask();
  }, []);
  return (
    <div>
      <Navbaruser konten="Add Fasilitas" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Pengerjaan Task</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Detail proses customer mengerjakan task
              </h6>
            </div>
            <Table borderless={true}>
              <tbody className="fw-bold">
                <tr>
                  <td>Tanggal Memulai</td>
                  <td>
                    <input
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        fontWeight: "bold",
                        color: "#7C7C7C",
                      }}
                      value={moment(dataTask?.createdAt).format("DD/MM/YYYY")}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Nama Customer</td>
                  <td>
                    <input
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        fontWeight: "bold",
                        color: "#7C7C7C",
                      }}
                      value={""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>No Handphone</td>
                  <td>
                    <input
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        fontWeight: "bold",
                        color: "#7C7C7C",
                      }}
                      value={"082134567890"}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Kode Task</td>
                  <td>
                    <input
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        fontWeight: "bold",
                        color: "#7C7C7C",
                      }}
                      value={"12345"}
                    />
                  </td>
                </tr>
                <tr>
                  <td>List Task</td>
                  <td>
                    <Form>
                      {["Main ke 1", "Main ke 2", "Main ke 3"].map((type) => (
                        <div key={"default-checkbox"} className="mb-3">
                          <Form.Check
                            type={"checkbox"}
                            id={`{type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              className="fw-bold text-dark me-4"
              style={{
                background: "#F8F9FA",
                border: "1px solid #161616",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
            >
              Batal
            </Button>
            <Button
              className="fw-bold text-dark me-4 mb-5"
              style={{
                background: "#C4f601",
                border: "1px solid #C4f601",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DetailTask);
