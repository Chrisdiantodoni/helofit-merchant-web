import React, { Component, useState, useRef } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios } from "../utils";
import { useEffect } from "react";
import moment from "moment";
import { each } from "lodash";
import { useHistory } from "react-router-dom";

const EditTask = (props) => {
  const [taskName, setTaskName] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [expiredDate, setExpiredDate] = useState("");
  const [listTask, setListTask] = useState([]);
  const [listTask2, setListTask2] = useState("");
  const [listTask3, setListTask3] = useState("");
  const [dataTask, setDataTask] = useState({});
  const [price, setPrice] = useState(0);
  const [point, setPoint] = useState(0);
  const idTask = props.location.state.id;
  console.log(idTask);
  const history = useHistory();

  function handleImageChange(event) {
    const image = event.target.files[0];
    setSelectedBanner(image);
  }
  function handleRemoveClick() {
    setSelectedBanner(null);
    setPreviewImage(null);
  }
  const hiddenFileInput = useRef(null);

  const getTask = async () => {
    const response = await Axios.get(`/task/detail/${idTask}`);
    const data = response?.data?.data;
    setDataTask(data);
    setTaskName(data.task_name);
    setSelectedBanner(data.banner_img);
    setExpiredDate(moment(data?.expiredIn).format("YYYY-MM-DD"));
    setListTask(data.list_task);
    setPoint(data.poin);
    setPrice(parseInt(data.poin) * 1000);
    console.log({ data });
  };

  useEffect(() => {
    getTask();
  }, []);

  const totalPoin = (price) => {
    const poin = price / 1000;
    return poin;
  };

  const handleEditTask = async () => {
    console.log({ listTask });
    const formData = new FormData();
    formData.append("taskId", idTask);
    formData.append("task_name", taskName);
    formData.append("expiredIn", expiredDate);
    formData.append("banner_img", selectedBanner);
    formData.append("poin", point);
    formData.append(
      "list_task",
      JSON.stringify(
        listTask.map((item) => ({
          task_name: item?.task_name,
          taskDetailId: item?.id,
        }))
      )
    );
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + JSON.stringify(pair[1]));
    // }
    await Axios.put(`/task/detail/${dataTask?.merchantId}`, formData)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
    window.alert(`Data ${taskName} berhasil di edit`);
    window.location.href = "/welcome/tasks";
  };

  const handleOnChangeTask = (e, index) => {
    let clone = [...listTask];
    let obj = clone[index];
    obj.task_name = e.target.value;
    clone[index] = obj;
    setListTask([...clone]);
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
            <h5 className="text-dark fw-bold">Tambah Fasilitas</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikan daftar task yang dapat customer kerjakan
              </h6>
            </div>
            <Table borderless={true}>
              <tbody className="fw-bold">
                <tr>
                  <td>Judul task</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Banner</td>
                  <td>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      style={{}}
                    />

                    {/* <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#c4f601",
                        border: "1px solid #C4f601",
                        borderRadius: "8px",
                        width: "157px",
                        height: "48px",
                      }}
                      onChange={handleClick}
                    >
                      Tambah Foto
                    </Button> */}

                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#DC3545",
                        border: "1px solid #DC3545",
                        borderRadius: "8px",
                      }}
                      onClick={handleRemoveClick}
                    >
                      <Logo />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {previewImage && (
                      <div>
                        <img
                          src={
                            selectedBanner
                              ? URL.createObjectURL(selectedBanner)
                              : null
                          }
                          style={{ width: 430, height: 130 }}
                          alt="Preview"
                        />
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Berlaku Sampai</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      type="date"
                      value={expiredDate}
                      onChange={(e) => setExpiredDate(e.target.value)}
                    />
                  </td>
                </tr>
                {listTask?.map((item, idx) => (
                  <tr>
                    <td>Task ke-{idx + 1}</td>
                    <td>
                      <input
                        style={{ borderRadius: 8 }}
                        value={listTask[idx].task_name}
                        onChange={(e) => handleOnChangeTask(e, idx)}
                      />
                    </td>
                  </tr>
                ))}

                <tr>
                  <td>Biaya yang dikeluarkan customer</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                        setPoint(parseInt(e.target.value / 1000));
                      }}
                    />
                    per keseluruhan task
                  </td>
                </tr>
                <tr>
                  <td>Poin yang didapatkan</td>
                  <td>
                    <input
                      value={point}
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        border: "none",
                        backgroundColor: "#D9D9D9",
                      }}
                    />
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
              onClick={handleEditTask}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditTask);
