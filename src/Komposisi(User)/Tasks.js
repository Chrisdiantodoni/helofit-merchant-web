import React, { Component } from "react";
import AuthService from "../services/auth.service";
import "../css/bootstrap.min.css";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
export class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Navbaruser konten='To-do List' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-5 pe-5'>
                  <table class='table table-borderless'>
                    <tbody>
                      <tr className='row'>
                        <td className='col-2'>
                          <label className='fw-bold'>Deadline</label>
                        </td>
                        <td className='col'>
                          <input
                            type='date'
                            name='awal'
                            value={this.state.awal}
                            className='w-25 border border-1'
                            onChange={this.setValueState.bind(this)}
                          />
                          &nbsp;ke&nbsp;
                          <input
                            type='date'
                            name='akhir'
                            value={this.state.akhir}
                            className='w-25 border border-1'
                            onChange={this.setValueState.bind(this)}
                          />
                        </td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>
                          <label className='fw-bold'>List</label>
                        </td>
                        <td className='col'>
                          <input
                            name='List'
                            value={this.state.list}
                            className='w-25 border border-1'
                            onChange={this.setValueState.bind(this)}></input>
                        </td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>
                          <button className='btn btn-primary rounded rounded-3'>
                            Tambah List
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <table class='table table-light table-hover'>
                    <tbody>
                      <tr className='row fw-bold border-dark'>
                        <td className='col-md-2'>Deadline</td>
                        <td className='col-md-1'>Status</td>
                        <td className='col-md-4'>Keterangan List</td>
                        <td className='col-md-5' colspan='2'>
                          Aksi
                        </td>
                      </tr>
                      <tr className='row'>
                        <td className='col-md-2'>Deadline</td>
                        <td className='col-md-1'>Status</td>
                        <td className='col-md-4'>Keterangan List</td>
                        <td className='col-md-5'>
                          <button className='btn btn-warning text-light me-3'>
                            Edit Data
                          </button>
                          <button className='btn btn-danger'>Hapus Data</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
