import React, { Component, useState, useRef } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios, currency } from "../utils";
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
  const [dataTask, setDataTask] = useState({});
  const [price, setPrice] = useState(0);
  const [point, setPoint] = useState(0);
  const idTask = props.location.state.id;
  console.log(idTask);
  const history = useHistory();
  const fileInputRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(dataTask.banner_img);

  function handleImageChange(event) {
    const image = event.target.files[0];
    console.log(image);
    setPreviewImage(URL.createObjectURL(image));
    setSelectedBanner(image);
  }

  function handleRemoveClick() {
    setSelectedBanner(null);
    setPreviewImage(null);
    console.log(selectedBanner);
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
    setPreviewImage(data?.banner_img);
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
  const handleButtonClick = () => {
    fileInputRef.current.click();
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
    try {
      await Axios.put(`/task/detail/${dataTask?.merchantId}`, formData)
        .then((res) => {
          console.log({ res });
        })
        .catch((err) => console.log({ err }));
      window.alert(`Data ${taskName} berhasil di edit`);
      window.location.href = "/welcome/tasks";
    } catch (error) {
      console.log(error);
      window.alert("Data gagal diedit");
    }
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
      <Navbaruser konten="Edit Task" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Edit Task</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikan daftar task yang dapat customer kerjakan
              </h6>
            </div>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4" className="fw-bold">
                  Judul task
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    style={{ borderRadius: 8 }}
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="4" className="fw-bold">
                  Banner
                </Form.Label>
                <Col sm="8">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  <Button
                    className="fw-bold text-dark me-4"
                    style={{
                      background: "#c4f601",
                      border: "1px solid #C4f601",
                      borderRadius: "8px",
                      width: "157px",
                      height: "48px",
                    }}
                    onClick={handleButtonClick}
                  >
                    Tambah Foto
                  </Button>
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
                    <img />
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4"></Form.Label>
                <Col sm="8">
                  {!currentImage && previewImage && (
                    <div>
                      <img
                        src={previewImage}
                        style={{ width: 430, height: 130 }}
                        alt="Preview"
                      />
                    </div>
                  )}
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4" className="fw-bold">
                  Berlaku Sampai
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    type="date"
                    value={expiredDate}
                    onChange={(e) => setExpiredDate(e.target.value)}
                  />
                </Col>
              </Form.Group>

              {listTask?.map((item, idx) => (
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label
                    column
                    sm="4"
                    className="fw-bold"
                    style={{ borderRadius: 8 }}
                  >
                    Task ke - {idx + 1}
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      style={{ borderRadius: 8 }}
                      value={listTask[idx].task_name}
                      onChange={(e) => handleOnChangeTask(e, idx)}
                    />
                  </Col>
                </Form.Group>
              ))}

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label
                  column
                  sm="4"
                  className="fw-bold"
                  style={{ borderRadius: 8 }}
                >
                  Biaya yang dikeluarkan customer
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Col>
                <Form.Label
                  column
                  sm="2"
                  className="fw-bold"
                  style={{ borderRadius: 8 }}
                >
                  per keseluruhan task
                </Form.Label>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label
                  column
                  sm="4"
                  className="fw-bold"
                  style={{ borderRadius: 8 }}
                >
                  Poin yang didapatkan
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    value={currency(parseInt(totalPoin(price))) || 0}
                    disabled={true}
                    style={{
                      borderRadius: 8,
                      border: "none",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                </Col>
              </Form.Group>
            </Form>
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
