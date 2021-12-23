import React, { Component } from "react";
import Axios from "axios";
export class Daftar extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      nama_depan: null,
      nama_belakang: null,
      password: null,
    };
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
            <form className='ms-5 mt-2 mx-auto text-start me-5 mb-5'>
              <h3 className='text-center pt-5'>
                Daftarkan Akun Kamu !
                <p className='text-muted fs-6'>
                  Sebelum memulai perjalananmu,
                  <br /> yuk cerita tentang dirimu
                </p>
              </h3>
              <div class='form-group mb-3 mt-3'>
                <label>
                  Nama Depan<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark'
                  name='nama_depan'
                  type='text'
                  value={this.state.nama_depan}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'
                  required
                  placeholder='Masukkan Nama Depan'></input>
                <div className='form-text text-danger'>{this.state.err}</div>
              </div>
              <div class='form-group mb-3'>
                <label>
                  Nama Belakang<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark'
                  name='nama_belakang'
                  type='text'
                  value={this.state.nama_belakang}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'
                  required
                  placeholder='Masukkan Nama Belakang'></input>
              </div>
              <div class='form-group mb-3'>
                <label>
                  Email<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark rounded-3'
                  name='email'
                  type='email'
                  value={this.state.email}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'
                  required
                  placeholder='Masukkan Email'></input>
              </div>
              <div class='form-group mb-3'>
                <label>
                  Password<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark rounded-3'
                  name='password'
                  type='password'
                  value={this.state.password}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'
                  required
                  placeholder='Masukkan Password'></input>
              </div>
              <div class='form-group mb-3'>
                <label>
                  Konfirmasi Password<span className='text-danger'>*</span>
                </label>
                <input
                  className='text-dark rounded-3'
                  name='konfirmasi'
                  type='password'
                  value={this.state.konfirmasi}
                  onChange={this.setValueState.bind(this)}
                  className='form-control rounded-pill'
                  required
                  placeholder='Masukkan Password Kembali'></input>
              </div>
              <div class='form-check mb-3'>
                <input
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
            </form>
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
