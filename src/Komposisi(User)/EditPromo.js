import React, { Component, useRef, useContext, useEffect } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table, Modal, Col, Form, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { useState } from "react";
import { Context } from "./../context/index";
import { Axios, currency } from "../utils";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AddPromo = (props) => {
  const idPromo = props.location.state.id;
  const history = useHistory();
  const { merchantId } = useContext(Context);
  const [promoName, setPromoName] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const fileInputRef = useRef(null);
  const [cost, setCost] = useState(0);
  const [expiredDate, setExpiredDate] = useState("");

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
  const totalPoin = (cost) => {
    const poin = cost / 1000;
    return poin;
  };
  useEffect(() => {
    console.log(selectedBanner);
  }, [selectedBanner]);

  useEffect(() => {
    getDetailTask();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };
  const handleEditPromo = async () => {
    if (
      promoName === "" ||
      cost === "" ||
      expiredDate === "" ||
      selectedBanner === null
    ) {
      setErrorMessage("Promo masih kosong");
      setShowErrorModal(true);
      return;
    }
    const formData = new FormData();
    formData.append("promo_name", promoName);
    formData.append("merchantId", merchantId);
    formData.append("cost", cost);
    formData.append("ExpiredIn", expiredDate);
    formData.append("promo_img", selectedBanner);
    formData.append("point", totalPoin(cost));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + JSON.stringify(pair[1]));
    }

    await Axios.put(`/promo/${idPromo}`, formData)
      .then((res) => {
        console.log(res);
        setShowModal(true);
        window.location.href = "/welcome/promo";
      })
      .catch((err) => console.log({ err }));
  };

  const getDetailTask = async () => {
    const response = await Axios.get(`/promo/detail/${idPromo}`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data;
      console.log(data);
      setPromoName(data?.promo_name);
      setPreviewImage(data?.promo_img);
      setSelectedBanner(data?.promo_img);
      setExpiredDate(data?.ExpiredIn);
      setCost(data?.cost);
    }
  };
  return (
    <div>
      <Navbaruser konten="Add Promo" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Tambah Promo</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikan promo yang Anda tawarkan ke customer
              </h6>
            </div>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4" className="fw-bold">
                  Judul Promo
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    style={{ borderRadius: 8 }}
                    value={promoName}
                    onChange={(e) => setPromoName(e.target.value)}
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
                    type="date"
                    style={{ borderRadius: 8 }}
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
                  Besarnya Biaya Potongan
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </Col>
                <Form.Label column sm="2">
                  per Promo
                </Form.Label>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4" className="fw-bold">
                  Poin yang ditukarkan
                </Form.Label>
                <Col sm="1">
                  <Form.Control
                    style={{ borderRadius: 8 }}
                    value={currency(parseInt(totalPoin(cost))) || 0}
                    disabled={true}
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
              onClick={handleEditPromo}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Promo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Promo Berhasil diedit</p>
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

export default withRouter(AddPromo);
