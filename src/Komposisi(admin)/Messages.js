import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";
import { AxiosAdmin } from "../utils";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const data = [
  {
    Nama: "Hartono Lubis",
    Email: "hartono.lbs@gmail.com",
    Pesan: "Keren banget websitenya",
  },
  {
    Nama: "Hartono Lubis",
    Email: "hartono.lbs@gmail.com",
    Pesan: "Keren banget websitenya",
  },
];

const Messages = () => {
  const [dataMessage, setDataMessage] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getMessages = async () => {
    const result = await AxiosAdmin.get("/message");
    setDataMessage(result?.data?.data?.message);
    console.log(result);
  };

  useEffect(() => {
    getMessages();
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
            <h5 className="text-dark fw-bold">Pesan Masuk</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Pesan yang dikirimkan melalui halaman kontak
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
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Pesan</th>
                    <th></th>
                  </tr>
                </thead>
                {dataMessage.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.message}</td>
                      <td>
                        <Button
                          className="fw-bold text-dark"
                          style={{
                            background: "#C4f601",
                            border: "1px solid #C4f601",
                            borderRadius: "8px",
                            width: "117px",
                            height: "30px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onClick={() => setShow(true)}
                        >
                          Balas
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Penerima</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="fw-bold text-dark"
            style={{
              background: "#F8F9FA",
              border: "1px solid #C4f601",
              borderRadius: "8px",
              width: "117px",
              height: "48px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleClose}
          >
            Batal
          </Button>
          <Button
            className="fw-bold text-dark"
            style={{
              background: "#C4f601",
              border: "1px solid #C4f601",
              borderRadius: "8px",
              width: "117px",
              height: "48px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleClose}
          >
            kirim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Messages);
