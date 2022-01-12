import React, { Component } from "react";
import Textarea from "react-validation/build/textarea";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import AuthService from "../services/auth.service";
import "../css/bootstrap.min.css";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { date } from "yup";
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger w-25' role='alert'>
        Field perlu diisi!
      </div>
    );
  }
};
const vfield = (value) => {
  if (value.length < 3 || value.length > 100) {
    return (
      <div className='alert alert-danger w-25' role='alert'>
        Field harus berisi antara 3 dan 100 karakter.
      </div>
    );
  }
};
export class Tasks extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      deadline: "",
      default: date,
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {}
  render() {
    const { currentUser, deadline, tes } = this.state;
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
                  <Form>
                    {tes}
                    <table class='table table-borderless'>
                      <tbody>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Deadline</label>
                          </td>
                          <td className='col'>
                            <Input
                              type='date'
                              name='deadline'
                              value={this.state.deadline}
                              min='2022-01-13'
                              className='w-25 border border-1'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}
                            />
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>List</label>
                          </td>
                          <td className='col'>
                            <Textarea
                              name='list'
                              value={this.state.list}
                              className='w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}
                            />
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
                  </Form>
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
