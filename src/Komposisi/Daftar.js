import React, { Component } from "react";
import Modal from "../Modal/modal.js";
export class Daftar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
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
            <p className='text-dark ps-5'>Nama</p>
            <hr className='text-secondary' />
          </div>
          <div className='Akhir text-start ms-4'>
            <button
              type='button'
              className='btn btn-secondary me-1'
              handleClose={this.hideModal}>
              Close
            </button>
            <button type='button' class='btn btn-primary'>
              Save changes
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Daftar;
