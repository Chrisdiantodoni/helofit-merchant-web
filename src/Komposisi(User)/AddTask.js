import React, { Component, useState, useRef } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table, Modal, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios, currency } from "../utils";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AddTask = (props) => {
  const dataUser = localStorage.getItem("dataUser");
  console.log(JSON.parse(dataUser)?.id);
  const merchantId = JSON.parse(dataUser)?.id;
  const fileInputRef = useRef(null);
  const [taskName, setTaskName] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [expiredDate, setExpiredDate] = useState("");
  const [listTask1, setListTask1] = useState("");
  const [listTask2, setListTask2] = useState("");
  const [listTask3, setListTask3] = useState("");
  const [price, setPrice] = useState(0);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  function handleImageChange(event) {
    const image = event.target.files[0];
    setSelectedBanner(image);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(image);
  }
  function handleRemoveClick() {
    setSelectedBanner(null);
    setPreviewImage(null);
  }

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };
  const handleAddTask = async () => {
    if (
      taskName === "" ||
      expiredDate === "" ||
      listTask1 === "" ||
      listTask2 === "" ||
      listTask3 === "" ||
      price === 0 ||
      selectedBanner === null
    ) {
      setErrorMessage("Task masih kosong");
      setShowErrorModal(true);
      return;
    }
    const formData = new FormData();
    formData.append("merchantId", merchantId);
    formData.append("task_name", taskName);
    formData.append("expiredIn", expiredDate);
    formData.append("poin", totalPoin(price));
    formData.append("banner_img", selectedBanner);
    formData.append(
      "list_task",
      JSON.stringify([
        {
          task_name: listTask1,
        },
        {
          task_name: listTask2,
        },
        {
          task_name: listTask3,
        },
      ])
    );

    await Axios.post(`/task`, formData)
      .then((res) => {
        console.log({ res });
        if (res) {
          setShowModal(true);
          window.location.href = "/welcome/tasks";
        }
      })
      .catch((err) => console.log({ err }));
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + JSON.stringify(pair[1]));
    }
    // console.log({ formData });
  };

  const totalPoin = (price) => {
    const poin = price / 1000;
    return poin;
  };

  return (
    <div>
      <Navbaruser konten="Add Tasks" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Tambah Task</h5>
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
                  {previewImage && (
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
                  Task ke-1
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    value={listTask1}
                    onChange={(e) => setListTask1(e.target.value)}
                  />
                </Col>
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
                  Task ke-2
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    value={listTask2}
                    onChange={(e) => setListTask2(e.target.value)}
                  />
                </Col>
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
                  Task ke-3
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    value={listTask3}
                    onChange={(e) => setListTask3(e.target.value)}
                  />
                </Col>
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
              onClick={handleAddTask}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Penambahan Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Task berhasil ditambah</p>
        </Modal.Body>
      </Modal>
      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(AddTask);
