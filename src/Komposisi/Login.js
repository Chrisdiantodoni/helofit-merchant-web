import React, { Component } from "react";
import Axios from "axios";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Bagian ini diperlukan!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        Ini bukan email yang valid.
      </div>
    );
  }
};

export class Login extends Component {
  constructor() {
    super();
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: null,
      password: null,
      successful: false,
      message: "",
      status: null,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    var emailLog = this.state.email;
    var passwordLog = this.state.password;
    var statusLog = this.state.status;
    const login = () => {
      Axios.post("http://localhost:8000/login", {
        email: emailLog,
        password: passwordLog,
      }).then((res) => {
        if (res.data.message) {
          statusLog = res.data.message;
        } else {
          localStorage.setItem("token", res.token);
        }
        this.setState({
          status: statusLog,
        });
        console.log(res);
      });
    };
    return (
      <div class='container mx-auto mt-5'>
        <div class='kanvas row shadow border border-1'>
          <div class='col-md'></div>
          <div class='col-md kanan'>
            <form className='container'>
              <h3 className='text-center pt-2'>
                Masuk ke Akun Microdigi Kamu!
                <p className='text-muted fs-6 pt-2'>
                  Sudah punya akun Microdigi? Yuk masuk untuk mengakses
                  <br /> beragam fitur Microdigi
                </p>
              </h3>
              <div class='form-group mb-3'>
                <label>
                  Alamat Email<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark rounded-3'
                  name='email'
                  type='email'
                  placeholder='Masukkan Em
                  onChange={this.onChangeEmail}ail Anda'
                  value={this.state.email}
                  validations={[required, email]}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'></input>
              </div>
              <div class='form-group mb-3'>
                <label>
                  Password<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark rounded-3'
                  name='password'
                  type='password'
                  placeholder='Masukkan Password Anda'
                  value={this.state.password}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'></input>
              </div>
              <div className='mt-2 text-danger fs-4'>{statusLog}</div>
              <p className='text-muted text-end'>Lupa password?</p>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-primary rounded-pill w-100'
                  onClick={login}>
                  Masuk
                </button>
                <p className='text-secondary mt-2'>
                  Belum punya akun? <span> </span>
                  <a href='/daftar' className='text-decoration-none fw-bold'>
                    Daftar di sini
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
