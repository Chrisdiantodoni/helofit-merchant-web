import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { withRouter } from "react-router-dom";
import AuthService from "../services/auth.service";
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Field perlu diisi!
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
const vfield = (value) => {
  if (value.length < 3 || value.length > 30) {
    return (
      <div className='alert alert-danger' role='alert'>
        Field harus berisi antara 3 dan 30 karakter.
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
        this.state.password
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
      <div>
        <div className='container mx-auto'>
          <h2 className='text-primary fw-bold text-center mt-4 mb-4'>
            Selamat Datang di Taskita
          </h2>
          <div className='container border border-1 w-50 rounded-3 mx-auto mb-3'>
            <Form
              className='ms-5 mt-2 mx-auto text-start me-5 mb-5'
              onSubmit={this.handleRegister}
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
                      name='nama_depan'
                      type='text'
                      value={this.state.nama_depan}
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vfield]}
                      className='text-dark form-control rounded-pill'
                      placeholder='Masukkan Nama Depan'></Input>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Nama Belakang<span className='text-danger'>*</span>
                    </label>
                    <Input
                      name='nama_belakang'
                      type='text'
                      value={this.state.nama_belakang}
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vfield]}
                      className='text-dark form-control rounded-pill'
                      placeholder='Masukkan Nama Belakang'></Input>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Email<span className='text-danger'>*</span>
                    </label>
                    <Input
                      name='email'
                      type='email'
                      value={this.state.email}
                      onChange={this.setValueState.bind(this)}
                      className='text-dark rounded-3 form-control rounded-pill'
                      placeholder='Masukkan Email'
                      validations={[required, email, vfield]}></Input>
                  </div>
                  <div class='form-group mb-3'>
                    <label>
                      Password<span className='text-danger'>*</span>
                    </label>
                    <Input
                      name='password'
                      type='password'
                      value={this.state.password}
                      className='text-dark rounded-3 form-control rounded-pill'
                      onChange={this.setValueState.bind(this)}
                      validations={[required, vfield]}
                      placeholder='Masukkan Password'></Input>
                  </div>
                  <div class='form-check mb-3'>
                    <Input
                      type='checkbox'
                      className='form-check-input'
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
                      type='submit'
                      className='btn btn-primary rounded-pill w-100'>
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
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
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

export default withRouter(Daftar);
