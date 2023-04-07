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
import * as Axios from "axios";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";
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
export class Kontak extends Component {
  constructor() {
    super();
    this.handleKontak = this.handleKontak.bind(this);

    this.state = {
      nama: "",
      email: "",
      pesan: "",
      loading: false,
      successful: false,
      message: "",
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleKontak(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Axios.post("http://localhost:8000/feedback", {
        nama: this.state.nama,
        email: this.state.email,
        pesan: this.state.pesan,
      }).then(
        (res) => {
          this.setState({
            message: res.data.message,
            successful: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  }
  render() {
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
                <Form
                  className="container"
                  onSubmit={this.handleKontak}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  {!this.state.successful && (
                    <div>
                      <div class="form-group mb-2">
                        <label className="text-light">
                          Nama Kamu<span className="text-danger">*</span>
                        </label>
                        <Input
                          className="text-dark rounded-3 form-control rounded-pill"
                          name="nama"
                          type="text"
                          placeholder="Masukkan Nama Anda"
                          value={this.state.nama}
                          validations={[required, vfield]}
                          onChange={this.setValueState.bind(this)}
                        ></Input>
                      </div>
                      <div class="form-group mb-2">
                        <label className="text-light">
                          Email Kamu<span className="text-danger">*</span>
                        </label>
                        <Input
                          className="text-dark rounded-3 form-control rounded-pill"
                          name="email"
                          type="email"
                          placeholder="Masukkan Email Anda"
                          value={this.state.email}
                          validations={[required, email, vfield]}
                          onChange={this.setValueState.bind(this)}
                        ></Input>
                      </div>
                      <div class="form-group mb-3">
                        <label className="text-light">
                          Pesan<span className="text-danger">*</span>
                        </label>
                        <Input
                          className="text-dark rounded-3 form-control rounded-pill"
                          name="pesan"
                          type="text"
                          placeholder="Masukkan Pesan Anda"
                          value={this.state.pesan}
                          validations={[required, vpesan]}
                          onChange={this.setValueState.bind(this)}
                        ></Input>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill w-100 mb-5"
                          disabled={this.state.loading}
                        >
                          {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Kirim Pesan</span>
                        </button>
                      </div>
                    </div>
                  )}
                  {this.state.message && (
                    <div className="form-group">
                      <div
                        className={
                          this.state.successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Kontak;
