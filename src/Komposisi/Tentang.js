import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { isEmail } from "validator";
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
export class Tentang extends Component {
  constructor() {
    super();

    this.state = {
      nama: "",
      email: "",
      pesan: "",
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div class='container mx-auto mt-5'>
        <div class='row shadow border border-1 pt-5'>
          <div class='col-md'>
            <h3 className='ms-5'>
              <span className='fw-bold'>Hubungi Kami</span>
              <p className='text-muted fs-6 pt-2'>
                Apabila ada saran atau pertanyaan lebih lanjut kamu bisa
                <br /> menghubungi kami dengan kontak yang tertera.
              </p>
            </h3>
            <p className='ms-5 ps-2 text-primary'>
              <BsTelephone /> +621234567890
            </p>
            <p className='ms-5 ps-2 text-primary'>
              <GoMail /> microdigi@gmail.com
            </p>
          </div>
          <div class='col-md kanan h-75'>
            <Form
              className='container'
              ref={(c) => {
                this.form = c;
              }}>
              <div class='form-group mb-2'>
                <label>
                  Nama Kamu<span className='text-danger'>*</span>
                </label>
                <Input
                  className='text-dark rounded-3 form-control rounded-pill'
                  name='nama'
                  type='text'
                  placeholder='Masukkan Nama Anda'
                  value={this.state.nama}
                  validations={[required, vfield]}
                  onChange={this.setValueState.bind(this)}></Input>
              </div>
              <div class='form-group mb-2'>
                <label>
                  Email Kamu<span className='text-danger'>*</span>
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
                  Pesan<span className='text-danger'>*</span>
                </label>
                <Input
                  className='text-dark rounded-3 form-control rounded-pill'
                  name='pesan'
                  type='text'
                  placeholder='Masukkan Pesan Anda'
                  value={this.state.email}
                  validations={[required]}
                  onChange={this.setValueState.bind(this)}></Input>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='btn btn-primary rounded-pill w-100 mb-5'
                  disabled={this.state.loading}>
                  {this.state.loading && (
                    <span className='spinner-border spinner-border-sm'></span>
                  )}
                  <span>Kirim Pesan</span>
                </button>
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
