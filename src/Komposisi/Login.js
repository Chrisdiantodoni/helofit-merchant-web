import React, { Component } from "react";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
export class Login extends Component {
  render() {
    return (
      <div class='container mx-auto mt-5'>
        <div class='kanvas row shadow border border-1'>
          <div class='col-md'></div>
          <div class='col-md kanan'>
            <form className='container'>
              <h3 className='text-center pt-5'>
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
                  // value={this.state.email}
                  // onChange={this.setValueState.bind(this)}
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
                  // value={this.state.password}
                  // onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'></input>
              </div>
              <p className='text-muted text-end'>Lupa password?</p>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-primary rounded-pill w-100'
                  // onClick={login}
                >
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
