import React, { Component } from "react";
import Axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    );
  }
};
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='alert alert-danger' role='alert'>
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
export class Daftar extends Component {
  constructor() {
    super();
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: null,
      nama_depan: null,
      nama_belakang: null,
      successful: false,
      password: null,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
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
    var namadpnReg = this.state.nama_depan;
    var namablkgReg = this.state.nama_belakang;
    var emailReg = this.state.email;
    var passwordReg = this.state.password;
    const daftar = () => {
      Axios.post("http://localhost:8000/daftar", {
        nama_dpn: namadpnReg,
        nama_blkg: namablkgReg,
        email: emailReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    };
    return (
      <div>
        <div className='container mx-auto'>
          <h2 className='text-primary fw-bold text-center mt-4 mb-4'>
            Selamat Datang di Microdigi
          </h2>
          <div className='container border border-1 w-50 rounded-3 mx-auto mb-3'>
            <Form
              className='ms-5 mt-2 mx-auto text-start me-5 mb-5'
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}>
              <h3 className='text-center pt-5'>
                Daftarkan Akun Kamu !
                <p className='text-muted fs-6'>
                  Sebelum memulai perjalananmu,
                  <br /> yuk cerita tentang dirimu
                </p>
              </h3>
              {!this.state.successful && (
                <div>
                  <div class='form-group mb-3 mt-3'>
                    <label>
                      Nama Depan<span className='text-danger'>*</span>
                    </label>
                    <Input
                      className='text-dark'
                      name='nama_depan'
                      type='text'
                      value={this.state.nama_depan}
                      onChange={this.onChangeUsername}
                      validations={[required, vusername]}
                      className='form-control rounded-pill'
                      placeholder='Masukkan Nama Depan'></Input>
                    <div className='form-text text-danger'>
                      {this.state.err}
                    </div>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Nama Belakang<span className='text-danger'>*</span>
                    </label>
                    <Input
                      className='text-dark'
                      name='nama_belakang'
                      type='text'
                      value={this.state.nama_belakang}
                      onChange={this.onChangeUsername}
                      validations={[required, vusername]}
                      className='form-control rounded-pill'
                      placeholder='Masukkan Nama Belakang'></Input>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Email<span className='text-danger'>*</span>
                    </label>
                    <Input
                      className='text-dark rounded-3'
                      name='email'
                      type='email'
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      className='form-control rounded-pill'
                      placeholder='Masukkan Email'
                      validations={[required, email]}></Input>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Password<span className='text-danger'>*</span>
                    </label>
                    <Input
                      className='text-dark rounded-3'
                      name='password'
                      type='password'
                      value={this.state.password}
                      className='form-control rounded-pill'
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                      placeholder='Masukkan Password'></Input>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Konfirmasi Password<span className='text-danger'>*</span>
                    </label>
                    <Input
                      className='text-dark rounded-3'
                      name='konfirmasi'
                      type='password'
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                      className='form-control rounded-pill'
                      required
                      placeholder='Masukkan Password Kembali'></Input>
                  </div>
                  <div class='form-check mb-3'>
                    <Input
                      type='checkbox'
                      class='form-check-input'
                      id='exampleCheck1'
                    />
                    <label class='form-check-label' for='exampleCheck1'>
                      Saya setuju dengan <span> </span>
                      <a href='/S&K' className='text-decoration-none'>
                        Syarat & Ketentuan <span> </span>
                      </a>
                      dan
                      <br />
                      <a href='/Kebijakan' className='text-decoration-none'>
                        Kebijakan Privasi
                      </a>
                      .
                    </label>
                  </div>
                  <div className='text-center'>
                    <button
                      type='button'
                      className='btn btn-primary rounded-pill w-100'
                      onClick={daftar}>
                      Daftar
                    </button>
                    <p className='text-secondary mt-2'>
                      Sudah punya akun? <span> </span>
                      <a href='/login' className='text-decoration-none fw-bold'>
                        Masuk di sini
                      </a>
                    </p>
                  </div>
                </div>
              )}
              {this.state.message && (
                <div className='form-group'>
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role='alert'>
                    {this.state.message}
                  </div>
                </div>
              )}
            </Form>
          </div>
        </div>
        {/* <Modal title='Daftar'>
          <div className='Judul'>
            <h5 className='mt-2 text-dark'>Daftar</h5>
            <hr className='text-secondary' />
          </div>
          <div className='Isi text-start'>
            <table className='table table-borderless m-4'>
              <tbody>
                <tr>
                  <td>
                    <label className='text-dark'>Username</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      className='text-dark'
                      name='username'
                      type='text'
                      value={this.state.username}
                      onChange={this.setValueState.bind(this)}
                      className='form-control w-50'></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className='text-dark'>Email</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      className='text-dark'
                      name='email'
                      type='email'
                      value={this.state.email}
                      onChange={this.setValueState.bind(this)}
                      className='form-control w-50'></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className='text-dark'>Password</label>
                  </td>
                  <td>:</td>
                  <td>
                    <input
                      className='text-dark'
                      name='password'
                      type='password'
                      value={this.state.password}
                      onChange={this.setValueState.bind(this)}
                      className='form-control w-50'></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className='text-secondary' />
          </div>
          <div className='Akhir text-start ms-4 mb-3'>
            <button
              type='button'
              className='btn btn-primary me-1'
              onClick={daftar}>
              Daftar
            </button>
          </div>
        </Modal> */}
      </div>
    );
  }
}

export default Daftar;
