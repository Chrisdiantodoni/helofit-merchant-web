import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { withRouter } from "react-router-dom";
import AuthService from "../services/auth.service";
import Navbarbefore from "../Komponen/Navbar(before login)";
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
const vpin = (value) => {
  if (value.length > 6) {
    return (
      <div className="alert alert-danger" role="alert">
        Field harus berisi 6 angka.
      </div>
    );
  }
};
export class Daftar extends Component {
  constructor() {
    super();
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      email: null,
      nama_depan: null,
      nama_belakang: null,
      successful: false,
      password: null,
      pin: null,
      message: "",
    };
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.Daftar(
        this.state.email,
        this.state.nama_depan,
        this.state.nama_belakang,
        this.state.password,
        this.state.pin
      ).then(
        (res) => {
          this.setState({
            message: res.data.message,
            successful: true,
          });
          setTimeout(() => {
            this.props.history.push("/login");
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
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div style={{ background: "#000000" }}>
        <Navbarbefore />
        <div className="container mx-auto">
          <p
            className="fw-bold text-center mt-4 mb-4"
            style={{ color: "#C4F601", fontSize: 40 }}
          >
            Ayo Menjadi Bagian dari Kami
          </p>
          <div
            className="container w-50 rounded-3 mx-auto mb-3"
            style={{ background: "#161616" }}
          >
            <Form
              className="ms-5 mt-2 mx-auto text-start me-5 mb-5"
              onSubmit={this.handleRegister}
              ref={(c) => {
                this.form = c;
              }}
            >
              <h3 className="text-center text-light pt-5">
                Daftarkan Fasilitas Kamu
                <p className="text-muted fs-6">
                  Isi data sesuai dengan informasi <br /> fasilitas yang kamu
                  miliki
                </p>
              </h3>
              {!this.state.successful && (
                <div>
                  <div class="form-group mb-3 mt-3">
                    <label
                      className="text-light "
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Nama Merchant
                    </label>
                    <Input
                      name="nama_depan"
                      type="text"
                      value={this.state.nama_depan}
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vfield]}
                      className="text-dark form-control"
                      style={{
                        width: "515px",
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                      }}
                    ></Input>
                  </div>
                  <div class="form-group mb-3">
                    <label
                      className="text-light "
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Jenis Olahraga
                    </label>
                    <Input
                      name="nama_belakang"
                      type="text"
                      value={this.state.nama_belakang}
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vfield]}
                      className="text-dark form-control"
                      placeholder="Masukkan Nama Belakang"
                      style={{
                        width: "515px",
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                      }}
                    ></Input>
                  </div>
                  <div class="form-group mb-3">
                    <label
                      className="text-light "
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Alamat Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.setValueState.bind(this)}
                      className="text-dark form-control"
                      placeholder="Masukkan Email"
                      validations={[required, email, vfield]}
                      style={{
                        width: "515px",
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                      }}
                    ></Input>
                  </div>
                  <div class="form-group mb-3">
                    <label
                      className="text-light "
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      Kata Sandi
                    </label>
                    <Input
                      name="password"
                      type="password"
                      value={this.state.password}
                      className="text-dark form-control"
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vfield]}
                      placeholder="Masukkan Password"
                      style={{
                        width: "515px",
                        height: "56px",
                        borderRadius: 16,
                        backgroundColor: "#7c7c7c",
                        border: "1px solid #7c7c7c",
                      }}
                    ></Input>
                  </div>
                  <div class="form-group mb-3">
                    <label
                      className="text-light "
                      style={{ fontSize: 24, fontweight: "700" }}
                    >
                      PIN (untuk pemulihan sandi)
                    </label>
                    <Input
                      name="pin"
                      type="number"
                      min="0"
                      value={this.state.pin}
                      className="text-dark form-control"
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vpin]}
                      placeholder="Masukkan Pin untuk dipakai dalam memulihkan password"
                      style={{
                        width: "515px",
                        height: "56px",
                        borderRadius: 16,
                        border: "1px solid #7c7c7c",
                        backgroundColor: "#7c7c7c",
                      }}
                    ></Input>
                  </div>
                  <div class="mb-3 text-light text-center">
                    Dengan mengklik daftar, Anda telah <br /> membaca dan paham{" "}
                    akan <span> </span>
                    <a
                      href="/login"
                      className="text-decoration-none fw-bold"
                      style={{ color: "#C4f601" }}
                    >
                      Syarat & Ketentuan <span> </span>
                    </a>
                    dari Helofit
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      style={{
                        width: "515px",
                        height: "56px",
                        borderRadius: 16,
                        background: "#C4f601",
                        fontSize: 24,
                      }}
                      className="btn w-100 text-dark fw-bold"
                    >
                      Daftar
                    </button>
                    <p className="text-light mt-2">
                      Sudah memiliki akun? <span> </span>
                      <a
                        href="/login"
                        className="text-decoration-none fw-bold"
                        style={{ color: "#C4f601" }}
                      >
                        Masuk di sini
                      </a>
                    </p>
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
    );
  }
}

export default withRouter(Daftar);
