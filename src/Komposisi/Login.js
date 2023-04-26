import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import "./Login.css";
import { Container } from "react-bootstrap";
import { isEmail } from "validator";
import axios from "axios";
import {
  Link,
  Redirect,
  withRouter,
  Route,
  useHistory,
} from "react-router-dom";
import ilustrasilogin from "../Assets/Bhineka.png";
import { Navbarbefore } from "./../Komponen/Navbar(before login)";
import AuthenticatonService from "../services/authentication";
import { Axios } from "../utils";
import e from "cors";
import WelcomeUser from "../Komposisi(User)/WelcomeUser";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Field perlu diisi!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Ini bukan email yang valid.
      </div>
    );
  }
};

const vfield = (value) => {
  if (value.length < 3 || value.length > 30) {
    return (
      <div className="alert alert-danger" role="alert">
        Field harus berisi antara 3 dan 30 karakter.
      </div>
    );
  }
};

const Login = () => {
  // this.handleLogin = this.handleLogin.bind(this);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      const response = await Axios.post("/authentication/login", {
        email,
        password,
      });
      const data = response.data;
      console.log(data);
      if (data.message === "OK") {
        history.push("/welcome/user");
      }
    } catch (error) {
      console.log(error);
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
        <div class="container mx-auto mt-5">
          <div class="row shadow" style={{ background: "#161616" }}>
            <div class="col-md col-sm-12">
              <img
                src={ilustrasilogin}
                height="664px"
                width="100%"
                style={{ objectFit: "cover", borderRadius: 16 }}
              />
            </div>
            <div class="col-md kanan" style={{ background: "#161616" }}>
              <Form
                className="container"
                onSubmit={handleLogin}
                // ref={(c) => {
                //   this.form = c;
                // }}
              >
                <h3 className="text-light text-center pt-4 mt-3">
                  Masuk ke akun Mitra Helofit
                  <p className="text-muted text-center fs-6 pt-2">
                    Karena kamu sudah terdaftar dalam Mitra Helofit, Yu Masuk
                    untuk bisa mengelola fasilitas yang kamu miliki
                  </p>
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
                <div class="form-group mb-1">
                  <label>
                    <h4 className="text-light">Password</h4>
                  </label>
                  <Input
                    className="text-dark form-control"
                    style={{
                      height: "56px",
                      borderRadius: 16,
                      background: "#7C7C7C",
                      border: "1px solid #7c7c7c",
                    }}
                    name="password"
                    type="password"
                    placeholder="Masukkan Password Anda"
                    value={password}
                    // validations={[required, vfield]}
                    onChange={(event) => setPassword(event.target.value)}
                  ></Input>
                </div>
                <p className="text-secondary text-end fw-bold mt-2">
                  <a
                    href="/lupapass"
                    className="text-decoration-none"
                    style={{ color: "#C4F601", fontSize: 20 }}
                  >
                    Lupa Kata Sandi?
                  </a>
                </p>
                <div className="text-center">
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
                  <p className="text-secondary mt-1 fw-bold mt-2">
                    Belum memiliki akun akun? <span> </span>
                    <a
                      href="/daftar"
                      className="text-decoration-none"
                      style={{
                        color: "#C4F601",
                        fontSize: 20,
                        fontWeight: "700",
                      }}
                    >
                      Daftar di sini
                    </a>
                  </p>
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
