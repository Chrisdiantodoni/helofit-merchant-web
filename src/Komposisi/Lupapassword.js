import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Axios } from "../utils";
import { Navbarbefore } from "./../Komponen/Navbar(before login)";
import Footer from "./Footer";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Lupapassword = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [verifiedError, setVerifiedError] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    const body = {
      email,
      pin,
      newPassword: password,
    };
    try {
      const response = await Axios.post(
        "/authentication/update-password",
        body
      );
      if (response.data) {
        console.log(response);
      } else {
        console.log("Gagal Update Password");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(body);
  };

  const handleVerifyAccount = async (e) => {
    e.preventDefault();
    const body = {
      email,
      pin,
    };
    try {
      const response = await Axios.post(
        "/authentication/find-account-by-pin",
        body
      );
      if (response.data) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
        setVerifiedError("Incorrect email or PIN");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsVerified(false);
      setVerifiedError("An error occurred during verification");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgetPassword(e);
  };

  return (
    <div style={{ background: "#000000" }}>
      <Navbarbefore />
      <Container className="mx-auto mt-4">
        <div
          className="container w-50 rounded-3 mx-auto mb-1"
          style={{ background: "#161616" }}
        >
          <Form className="ms-5 mt-2 mx-auto text-start me-5 mb-4">
            <h3 className="text-center text-light mt-3 pt-5">
              Lupa Kata Sandi?
              <p className="text-muted fs-6">
                Pastikan Anda merupakan pengguna yang sah dan jangan beritahu
                PIN Anda kesiapapun termasuk pihak Helofit
              </p>
            </h3>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light fw-bold">
                    Alamat Email
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsVerified(false);
                    }}
                    className="text-dark rounded-3 rounded-pill"
                    placeholder="Masukkan Email"
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light fw-bold">PIN</Form.Label>
                  <Form.Control
                    name="pin"
                    type="password"
                    min="0"
                    value={pin}
                    className="text-dark rounded-3 rounded-pill"
                    onChange={(e) => {
                      setPin(e.target.value);
                      setIsVerified(false);
                    }}
                    placeholder="Masukkan Pin Anda"
                  />
                </Form.Group>
              </Col>
              <div className="text-center">
                <Button
                  className="btn btn-primary rounded-pill w-100"
                  onClick={handleVerifyAccount}
                  type="button"
                >
                  Verifying Account
                </Button>
              </div>
              {isVerified && (
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light fw-bold">
                      Kata Sandi Baru
                    </Form.Label>
                    <InputGroup>
                      <FormControl
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        className="text-dark rounded-3 rounded-pill"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan Password Baru Anda"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        className="rounded-3 rounded-pill"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
              )}
              <div className="text-center">
                {isVerified && (
                  <>
                    <Button
                      type="submit"
                      className="btn btn-primary rounded-pill w-100"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </div>
            </Row>
            <div className="text-center">
              <p className="text-secondary mt-2">
                Masih Bermasalah?
                <a href="/kontak" className="text-decoration-none fw-bold">
                  Hubungi Kami
                </a>
              </p>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(Lupapassword);
