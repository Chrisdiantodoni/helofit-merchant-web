import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import "./Login.css";
import { Container } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  Link,
  Redirect,
  withRouter,
  Route,
  useHistory,
} from "react-router-dom";
import { Navbarbefore } from "./../Komponen/Navbar(before login)";
import { AxiosAdmin } from "../utils";

const Login = () => {
  // this.handleLogin = this.handleLogin.bind(this);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [successful, setSuccessful] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      const response = await AxiosAdmin.post("/authentication/login", {
        email,
        password,
      });
      const data = response.data?.data;
      setUser(data);
      localStorage.setItem("user", data);
      console.log(data);
      if (response.data.message === "OK") {
        const token = response.data?.data?.token;
        const refreshToken = response.data.data.refreshToken;
        const dataAdmin = response.data.data.data;
        StringifyLocalStorage({
          name: "token",
          value: token,
        });
        StringifyLocalStorage({
          name: "refreshToken",
          value: refreshToken,
        });
        StringifyLocalStorage({
          name: "dataAdmin",
          value: JSON.stringify(dataAdmin),
        });
        window.location.href = "/admin/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const StringifyLocalStorage = ({ name = "", value }) => {
    const result = localStorage.setItem(name, value);
    if (name && value) {
      return result;
    } else {
      return window.alert("Parsing Gagal");
    }
  };
  // if (isLoggedIn) {
  //   return (
  //   );
  // }

  return (
    <div style={{ background: "#000000" }}>
      <Navbarbefore />
      <Container>
        <div class="container mt-5">
          <div class="row shadow" style={{ background: "#161616" }}>
            <div class="col-md kanan" style={{ background: "#161616" }}>
              <Form className="container" onSubmit={handleLogin}>
                <h3 className="text-light text-center pt-4 mt-3">
                  Masuk ke akun Admin Helofit
                </h3>
                <div class="form-group mb-3">
                  <label>
                    <h4 className="text-light">Alamat Email</h4>
                  </label>
                  <Input
                    className="text-dark form-control"
                    style={{
                      height: "56px",
                      borderRadius: 16,
                      background: "#7C7C7C",
                      border: "1px solid #7c7c7c",
                    }}
                    name="email"
                    type="email"
                    placeholder="Masukkan Email Anda"
                    value={email}
                    // validations={[required, email, vfield]}
                    onChange={(event) => setEmail(event.target.value)}
                  ></Input>
                </div>
                <div className="form-group mb-1">
                  <label>
                    <h4 className="text-light">Password</h4>
                  </label>
                  <div style={{ position: "relative" }}>
                    <Input
                      className="text-dark form-control"
                      style={{
                        height: "56px",
                        borderRadius: 16,
                        background: "#7C7C7C",
                        border: "1px solid #7c7c7c",
                        paddingRight: "2.5rem",
                      }}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan Password Anda"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
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
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                </div>
                <div className="text-center pt-5">
                  <button
                    style={{ background: "#C4F601", borderRadius: 16 }}
                    type="submit"
                    className="btn w-100"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                      }}
                    >
                      Masuk
                    </span>
                  </button>
                </div>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                {/* <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                /> */}
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(Login);
