import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { isEmail } from "validator";
export class Tentang extends Component {
  constructor() {
    super();

    this.state = {};
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div class='container mx-auto mt-5'>
        <div class='kanvas row shadow border border-1'>
          <div class='col-md'></div>
          <div class='col-md kanan'>
            <Form
              className='container'
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}>
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
              <p className='text-muted text-end'>Lupa password?</p>
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
                <p className='text-secondary mt-2'>
                  Belum punya akun? <span> </span>
                  <a href='/daftar' className='text-decoration-none fw-bold'>
                    Daftar di sini
                  </a>
                </p>
              </div>
              {this.state.message && (
                <div className='form-group'>
                  <div className='alert alert-danger' role='alert'>
                    {this.state.message}
                  </div>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Tentang;
