import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
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
export class LoginAdmin extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      currentUser: true,
      showAdminBoard: false,
      email: null,
      password: null,
      successful: false,
      loading: false,
      message: "",
    };
  }

  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  Keluar() {
    AuthService.Keluar();
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.loginadmin(this.state.email, this.state.password).then(
        () => {
          setTimeout(() => {
            this.props.history.push("/admin/dashboard");
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
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <div class='container mx-auto mt-5'>
        <div class='kanvasadmin row shadow border border-1 bg-white mx-auto'>
          <div class='col'>
            <Form
              className='container'
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}>
              <h3 className='text-center pt-4 mt-3'>
                Masuk ke Akun Admin Taskita Kamu!
                <p className='text-muted fs-6 pt-2'>
                  Sudah punya akun Taskita? Yuk masuk untuk mengakses
                  <br /> beragam fitur Taskita
                </p>
              </h3>
              <div class='form-group mb-3'>
                <label className='text-start'>
                  Alamat Email<span className='text-danger'>*</span>
                </label>
                <Input
                  className='text-dark rounded-3 form-control rounded-pill'
                  name='email'
                  type='email'
                  placeholder='Masukkan Email Anda'
                  value={this.state.email}
                  validations={[required, email, vfield]}
                  onChange={this.setValueState.bind(this)}></Input>
              </div>
              <div class='form-group mb-3'>
                <label>
                  Password<span className='text-danger'>*</span>
                </label>
                <Input
                  className='text-dark rounded-3 form-control rounded-pill'
                  name='password'
                  type='password'
                  placeholder='Masukkan Password Anda'
                  value={this.state.password}
                  validations={[required, vfield]}
                  onChange={this.setValueState.bind(this)}></Input>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='btn btn-primary rounded-pill w-100'
                  disabled={this.state.loading}>
                  {this.state.loading && (
                    <span className='spinner-border spinner-border-sm'></span>
                  )}
                  <span>Masuk</span>
                </button>
              </div>
              {this.state.message && (
                <div className='form-group'>
                  <div className='alert alert-danger' role='alert'>
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

export default withRouter(LoginAdmin);
