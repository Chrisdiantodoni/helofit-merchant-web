import React, { Component } from "react";
import Modal from "../Modal/modal.js";
import Axios from "axios";
export class Daftar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      username: null,
      email: null,
      password: null,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    var usernameReg = this.state.username;
    var emailReg = this.state.email;
    var passwordReg = this.state.password;
    const daftar = () => {
      Axios.post("http://localhost:8000/daftar", {
        username: usernameReg,
        email: emailReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    };
    return (
      <div>
        <button
          type='button'
          className='btn-sm btn-outline-primary rounded-pill me-1'
          onClick={this.showModal}>
          Daftar Gratis!
        </button>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          title='Daftar'>
          <div className='Judul'>
            <h5 className='mt-2 text-dark'>Daftar</h5>
            <hr className='text-secondary' />
          </div>
          <div className='Isi text-start'>
            <table className='table table-borderless m-4'>
              <tbody className=''>
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
        </Modal>
      </div>
    );
  }
}

export default Daftar;
