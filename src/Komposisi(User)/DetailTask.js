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
import { useHistory } from "react-router-dom";

const DetailTask = (props) => {
  const idUser = props.location.state.idUser;
  const taskUserId = props.location.state.taskUserId;
  const taskId = props.location.state.taskId;
  console.log(idUser);
  const history = useHistory();

  const [dataTask, setDataTask] = useState("");
  const [selectedTask, setSelectedTask] = useState([]);

  const getDetailTask2 = async () => {
    const response = await Axios.get(
      `/task/list-task-user/detail/${idUser}/${taskId}/${taskUserId}`
    );
    const data = response.data;
    setDataTask(data?.data);

    console.log({ data });
  };

  useEffect(() => {
    // getDetailTask(idUser);
    getDetailTask2();
  }, []);

  const handleOnChangeTask = async (id) => {
    try {
      const body = {
        taskDetailId: JSON.stringify(
          [
            ...selectedTask.map((item) => item.id.toString()),
            ...(dataTask?.taskDetailId || []),
          ].filter(Boolean)
        ),
      };
      await Axios.put(`/task/list-task-user/detail/${taskUserId}`, body).then(
        (result) => {
          if (result.data.message == "OK") {
            getDetailTask2();
          }
        }
      );
      window.location.reload();
      // Update the dataTask state with the updated taskDetailId
      console.log({ body });
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const validatingChecked = (item) => {
    const taskDetailIdArray = dataTask?.taskDetailId?.split(",") || [];
    return taskDetailIdArray.includes(item.id.toString());
  };

  const handleSelectedTask = (item) => {
    console.log(item);
    const findDuplicate = selectedTask.find((find) => find.id === item.id);

    if (!findDuplicate?.id) {
      setSelectedTask([...selectedTask, item]);
    } else {
      setSelectedTask(selectedTask.filter((filter) => filter.id !== item.id));
    }
  };

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
                      value={dataTask?.userInfo?.username}
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
                      value={dataTask?.userInfo?.phone_number || "-"}
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
                      value={dataTask?.taskId}
                    />
                  </td>
                </tr>
                <tr>
                  <td>List Task</td>
                  <td>
                    <Form>
                      {dataTask?.list_task?.map((item, index) => (
                        <div key={item.id} className="mb-3">
                          {dataTask?.taskDetailId?.includes(
                            JSON.stringify(item?.id)
                          ) ? (
                            item.task_name + " Selesai"
                          ) : (
                            <Form.Check
                              type="checkbox"
                              id={`exampleCheckbox${index}`}
                              label={item.task_name}
                              onClick={() => handleSelectedTask(item)}
                            />
                          )}
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
              onClick={() => history.goBack()}
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
              onClick={handleOnChangeTask}
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
