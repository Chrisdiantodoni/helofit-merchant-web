import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Navbarbefore from "../Komponen/Navbar(before login)";
import "../css/bootstrap.min.css";
import "./Kontak.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTelephone, BsFacebook, BsInstagram } from "react-icons/bs";
import { GoLocation, GoMail } from "react-icons/go";
import { isEmail } from "validator";
import axios, * as Axios from "axios";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";
import { useState } from "react";
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
const vpesan = (value) => {
  if (value.length < 20 || value.length > 200) {
    return (
      <div className="alert alert-danger" role="alert">
        Pesan harus berisi antara 20 dan 200 karakter.
      </div>
    );
  }
};

const Kontak = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleKontak = async () => {
    try {
      const body = {
        name,
        message,
        email,
      };
      const response = await axios.post(
        "http://localhost:3002/api/v1/public/message",
        body
      );
      console.log(response);
      window.alert("Pesan Berhasil di kirim");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        background: "#000000",
      }}
    >
      <Navbarbefore />
      <Container>
        <div class="container mx-auto mt-5 mb-5">
          <div
            class="row border-1 pt-5"
            style={{
              background: "#161616",
              flex: 1,
              border: "1px solid #161616",
            }}
          >
            <div class="col-md">
              <h3 className="ms-5">
                <span className="fw-bold text-light">Hubungi Kami</span>
                <p className=" fs-6 pt-2" style={{ color: "#7c7c7c" }}>
                  Apabila ada saran atau pertanyaan lebih lanjut kamu bisa
                  <br /> menghubungi kami dengan kontak yang tertera.
                </p>
              </h3>
              <p className="ms-5 ps-2 text-light">
                <BsTelephone size={24} />
                +621234567890
              </p>
              <p className="ms-5 ps-2 text-light">
                <GoMail size={24} /> info@helofit.com
              </p>
              <p className="ms-5 ps-2 text-light">
                <GoLocation size={24} /> Jl. M.H Thamrin No 112 Medan
              </p>
              <br />

              <BsFacebook
                size={24}
                className="ms-5 icon fb  text-light  text-center m-1 mb-2"
              />
              <BsInstagram
                size={24}
                className="icon ig text-center text-light m-1 mb-2"
              />
            </div>
            <div class="col-md kanan h-75" style={{ background: "#161616" }}>
              <Form className="container" onSubmit={handleKontak}>
                <div>
                  <div class="form-group mb-2">
                    <label
                      className="text-light"
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Nama Kamu<span className="text-danger">*</span>
                    </label>
                    <Input
                      className="text-dark form-control w-100"
                      name="nama"
                      type="text"
                      placeholder="Masukkan Nama Anda"
                      value={name}
                      // validations={[required, vfield]}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                        fontSize: 20,
                        color: "#ffffff",
                        paddingLeft: 5,
                      }}
                    ></Input>
                  </div>
                  <div class="form-group mb-2">
                    <label
                      className="text-light"
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Email Kamu<span className="text-danger">*</span>
                    </label>
                    <Input
                      className="text-dark form-control w-100"
                      name="email"
                      type="email"
                      placeholder="Masukkan Email Anda"
                      value={email}
                      // validations={[required, email, vfield]}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                        fontSize: 20,
                        color: "#ffffff",
                        paddingLeft: 5,
                      }}
                    ></Input>
                  </div>
                  <div class="form-group mb-3">
                    <label
                      className="text-light"
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Pesan<span className="text-danger">*</span>
                    </label>
                    <Input
                      className="text-dark form-control w-100"
                      name="pesan"
                      type="text"
                      placeholder="Masukkan Pesan Anda"
                      value={message}
                      // validations={[required, vpesan]}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                        fontSize: 20,
                        color: "#ffffff",
                        paddingLeft: 5,
                      }}
                    ></Input>
                  </div>
                  <div className="text-dark fw-bold" style={{ fontSize: 24 }}>
                    <button
                      type="submit"
                      className="btn w-100 mb-5"
                      style={{
                        height: "56px",
                        borderRadius: 16,
                        background: "#C4f601",
                        fontSize: 24,
                      }}
                      // disabled={this.state.loading}
                    >
                      {/* {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )} */}
                      <h4>Kirim Pesan</h4>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Kontak;
