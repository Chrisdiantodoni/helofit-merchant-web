import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { AxiosAdmin } from "../utils";

const Messages = () => {
  const [dataMessage, setDataMessage] = useState([]);
  const [show, setShow] = useState(false);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("from Helofit");
  const [text, setText] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setLoading] = useState(false);

  const sendEmail = (id) => {
    try {
      AxiosAdmin.post("/email", { to: emailUser, subject, text })
        .then((response) => {
          console.log(response.data);
          updateStatusEmail(id);
          setShow(false);
          window.location.reload();
          window.alert("Pesan berhasil dikirim");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);

  const getMessages = async () => {
    const result = await AxiosAdmin.get("/message");
    setDataMessage(result?.data?.data?.message);
    console.log(result);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleShowModal = (id, email) => {
    setShow(true);
    setId(id);
    setEmailUser(email);
  };

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const updateStatusEmail = async (id) => {
    try {
      const res = await AxiosAdmin.put(`/email/${id}`, {
        status: "responded",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-12 col-md-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-12 col-md-8 mt-5">
          <div className="container">
            <h5 className="text-dark fw-bold">Pesan Masuk</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Pesan yang dikirimkan melalui halaman kontak
              </h6>
            </div>
            <div className="justify-content-center d-flex mt-5">
              <Table responsive borderless>
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
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  {dataMessage.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.message}</td>
                      <td>
                        {item.status === "ignored"
                          ? "Belum dibalas"
                          : "Sudah dibalas"}
                      </td>
                      <td>
                        <Button
                          className="fw-bold text-dark"
                          style={{
                            background: "#C4f601",
                            border: "1px solid #C4f601",
                            borderRadius: "8px",
                            width: "200px",
                            height: "30px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          disabled={item.status === "responded"}
                          onClick={() => handleShowModal(item.id, item.email)}
                        >
                          {item.status === "responded"
                            ? "Sudah dibalas"
                            : "Balas"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
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
                value={emailUser}
                disabled
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pesan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
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
            disabled={isLoading}
            onClick={() => {
              sendEmail(id);
              setLoading(true);
            }}
          >
            {isLoading ? "Loading…" : "Balas"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Messages);
