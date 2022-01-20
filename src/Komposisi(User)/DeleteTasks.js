import React, { Component } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { withRouter } from "react-router-dom";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import * as Axios from "axios";
export class DeleteTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      successful: "",
      deadline: "",
      status: "",
      keterangan: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.CekStatus = this.CekStatus.bind(this);
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    fetch("http://localhost:8000/deletetasks/" + this.props.match.params.id)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          deadline: res.deadline.slice(0, 10),
          status: res.status,
          keterangan: res.keterangan,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  CekStatus(status) {
    var pesan;
    if (status === "Berjalan") {
      pesan = (
        <div className='btn btn-warning disabled w-25' role='alert'>
          Berjalan
        </div>
      );
    } else {
      pesan = (
        <div className='btn btn-success disabled w-25' role='alert'>
          Selesai
        </div>
      );
    }
    return pesan;
  }
  handleDelete(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Axios.delete(
        "http://localhost:8000/tasks/" + this.props.match.params.id,
        { body: JSON.stringify(this.state) }
      ).then(
        (res) => {
          this.setState({
            message: "List berhasil dihapus",
            successful: true,
          });
          setTimeout(() => {
            this.props.history.goBack();
          }, 2000);
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
  render() {
    return (
      <div>
        <Navbaruser konten='Hapus to-do List' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <Form
                    onSubmit={this.handleDelete}
                    ref={(c) => {
                      this.form = c;
                    }}>
                    <table class='table table-borderless'>
                      <tbody>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Deadline</label>
                          </td>
                          <td className='col'>
                            <input
                              type='date'
                              name='deadline'
                              disabled
                              value={this.state.deadline}
                              className='w-25 border border-1'
                              onChange={this.setValueState.bind(this)}
                            />
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Status</label>
                          </td>
                          <td className='col'>
                            {this.CekStatus(this.state.status)}
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>List</label>
                          </td>
                          <td className='col'>
                            <textarea
                              name='keterangan'
                              value={this.state.keterangan}
                              disabled
                              className='w-25 border border-1'
                              onChange={this.setValueState.bind(this)}
                            />
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <button className='btn btn-danger rounded rounded-3'>
                              Delete List
                            </button>
                          </td>
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
                        </tr>
                      </tbody>
                    </table>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DeleteTasks);
