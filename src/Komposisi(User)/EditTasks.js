import React, { Component } from "react";
import Textarea from "react-validation/build/textarea";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select";
import AuthService from "../services/auth.service";
import { withRouter } from "react-router-dom";
import moment from "moment";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import * as Axios from "axios";
const status2 = [
  { value: "Berjalan", label: "Berjalan" },
  { value: "Selesai", label: "Selesai" },
];
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger w-25' role='alert'>
        Field perlu diisi!
      </div>
    );
  }
};
const reqdate = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger w-25' role='alert'>
        Silakan pilih tanggal deadline!
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
export class EditTasks extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      minim =
        today.getFullYear() +
        "-" +
        ("0" + today.getMonth() + 1).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      deadline: "",
      status: "",
      mindate: minim,
      keterangan: "",
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleEdit(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Axios.put("http://localhost:8000/tasks/" + this.props.match.params.id, {
        deadline: this.state.deadline,
        status: this.state.status,
        keterangan: this.state.keterangan,
      }).then(
        (res) => {
          this.setState({
            message: "List berhasil diupdate",
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
  componentDidMount() {
    fetch("http://localhost:8000/edittasks/" + this.props.match.params.id)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          deadline: moment(res.deadline).add(17, "hours").format("YYYY-MM-DD"),
          status: res.status,
          keterangan: res.keterangan,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { mindate } = this.state;

    return (
      <div>
        <Navbaruser konten='Edit to-do List' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <Form
                    onSubmit={this.handleEdit}
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
                            <Input
                              type='date'
                              name='deadline'
                              value={this.state.deadline}
                              min={mindate}
                              className='w-25 border border-1'
                              validations={[reqdate]}
                              onChange={this.setValueState.bind(this)}
                            />
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Status</label>
                          </td>
                          <td className='col'>
                            <Select
                              name='status'
                              value={this.state.status}
                              className='w-25 border border-1'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}>
                              {status2.map((option) => (
                                <option value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Select>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>List</label>
                          </td>
                          <td className='col'>
                            <Textarea
                              name='keterangan'
                              value={this.state.keterangan}
                              className='w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}
                            />
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <button className='btn btn-success rounded rounded-3'>
                              Update List
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

export default withRouter(EditTasks);
