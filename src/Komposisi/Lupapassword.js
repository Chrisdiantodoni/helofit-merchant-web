import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Axios } from "../utils";
import { Navbarbefore } from "./../Komponen/Navbar(before login)";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
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
                    style={{
                      height: "56px",
                      borderRadius: 16,
                      background: "#7C7C7C",
                      border: "1px solid #7c7c7c",
                      color: "#FFFFFF",
                      paddingRight: "2.5rem",
                    }}
                    className="text-dark rounded-3"
                    placeholder="Masukkan Email"
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light fw-bold">PIN</Form.Label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Form.Control
                      name="pin"
                      type={showPassword ? "text" : "password"}
                      min="0"
                      value={pin}
                      className="text-dark rounded-3"
                      onChange={(e) => {
                        setPin(e.target.value);
                        setIsVerified(false);
                      }}
                      style={{
                        height: "56px",
                        borderRadius: 16,
                        background: "#7C7C7C",
                        border: "1px solid #7c7c7c",
                        color: "#FFFFFF",
                        paddingRight: "2.5rem",
                      }}
                      placeholder="Masukkan Pin Anda"
                    />
                    {showPassword ? (
                      <button
                        type="button"
                        className="btn btn-link eye-button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "1rem",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          padding: 0,
                          zIndex: 1,
                        }}
                      >
                        <FaRegEye />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-link eye-button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "1rem",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          padding: 0,
                          zIndex: 1,
                        }}
                      >
                        <FaRegEyeSlash />
                      </button>
                    )}
                  </div>
                </Form.Group>
              </Col>
              <div className="text-center">
                <Button
                  style={{ background: "#C4F601", borderRadius: 16 }}
                  className="btn w-100"
                  onClick={handleVerifyAccount}
                  type="button"
                >
                  <span
                    className="fw-bold"
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    Verifying Account
                  </span>
                </Button>
              </div>
              {isVerified && (
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light fw-bold">
                      Kata Sandi Baru
                    </Form.Label>
                    <InputGroup
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FormControl
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        style={{
                          height: "56px",
                          borderRadius: 16,
                          background: "#7C7C7C",
                          border: "1px solid #7c7c7c",
                          color: "#FFFFFF",
                          paddingRight: "2.5rem",
                        }}
                        className="text-dark "
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan Password Baru Anda"
                      />

                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {showPassword ? (
                          <button
                            type="button"
                            className="btn btn-link eye-button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              position: "absolute",
                              top: "50%",
                              right: "1rem",
                              transform: "translateY(-50%)",
                              background: "none",
                              border: "none",
                              padding: 0,
                              zIndex: 1,
                            }}
                          >
                            <FaRegEye />
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-link eye-button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              position: "absolute",
                              top: "50%",
                              right: "1rem",
                              transform: "translateY(-50%)",
                              background: "none",
                              border: "none",
                              padding: 0,
                              zIndex: 1,
                            }}
                          >
                            <FaRegEyeSlash />
                          </button>
                        )}
                      </div>
                    </InputGroup>
                  </Form.Group>
                </Col>
              )}
              <div className="text-center">
                {isVerified && (
                  <>
                    <Button
                      type="submit"
                      style={{ background: "#C4F601", borderRadius: 16 }}
                      className="btn btn-primary w-100"
                      onClick={(e) => handleSubmit(e)}
                    >
                      <span
                        className="fw-bold"
                        style={{
                          fontSize: 20,
                          fontWeight: "700",
                          color: "#000000",
                        }}
                      >
                        Ganti Kata Sandi
                      </span>
                    </Button>
                  </>
                )}
              </div>
            </Row>
            <div className="text-center">
              <p className="text-secondary mt-2">
                Masih Bermasalah?
                <a
                  href="/kontak"
                  style={{ color: "#C4F601" }}
                  className="text-decoration-none fw-bold"
                >
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
