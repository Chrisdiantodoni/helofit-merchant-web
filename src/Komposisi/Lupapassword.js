import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { withRouter } from "react-router-dom";
import AuthService from "../services/auth.service";
import * as Axios from "axios";
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
const vpin = (value) => {
  if (value.length > 6) {
    return (
      <div className='alert alert-danger' role='alert'>
        Field harus berisi 6 angka.
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
export class Lupapassword extends Component {
  constructor() {
    super();
    this.handleForget = this.handleForget.bind(this);

    this.state = {
      email: null,
      successful: false,
      pin: null,
      message: "",
    };
  }

  handleForget(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.recovery(this.state.email, this.state.pin).then(
        (res) => {
          Axios.put("http://localhost:8000/recovery/" + this.state.email, {
            password: this.state.password,
          });
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
        <div className='container mx-auto mt-4'>
          <div className='container border border-1 w-50 rounded-3 mx-auto mb-1'>
            <Form
              className='ms-5 mt-2 mx-auto text-start me-5 mb-4'
              onSubmit={this.handleForget}
              ref={(c) => {
                this.form = c;
              }}>
              <h3 className='text-center mt-3'>
                Lupa Password?
                <p className='text-muted fs-6'>
                  Pastikan kamu adalah pengguna yang sah dan jangan beri tahu
                  pin kamu ke siapa-siapa
                </p>
              </h3>
              <div>
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
                    Pin<span className='text-danger'>*</span>
                  </label>
                  <Input
                    name='pin'
                    type='number'
                    min='0'
                    value={this.state.pin}
                    className='text-dark rounded-3 form-control rounded-pill'
                    onChange={this.setValueState.bind(this)}
                    validations={[required, vpin]}
                    placeholder='Masukkan Pin Anda'></Input>
                </div>
                <div class='form-group mb-3'>
                  <label>
                    Password Baru Anda<span className='text-danger'>*</span>
                  </label>
                  <Input
                    name='password'
                    type='password'
                    value={this.state.password}
                    className='text-dark rounded-3 form-control rounded-pill'
                    onChange={this.setValueState.bind(this)}
                    validations={[required, vfield]}
                    placeholder='Masukkan Password Baru Anda'></Input>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='btn btn-primary rounded-pill w-100'>
                    Submit
                  </button>
                  <p className='text-secondary mt-2'>
                    Masih Bermasalah? <span> </span>
                    <a href='/kontak' className='text-decoration-none fw-bold'>
                      Hubungi Kami
                    </a>
                  </p>
                </div>
              </div>
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
      </div>
    );
  }
}

export default withRouter(Lupapassword);
