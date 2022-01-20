import React, { Component } from "react";
import Textarea from "react-validation/build/textarea";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import "../css/bootstrap.min.css";
import Navbaruser from "../Komponen/Navbar(login user)";
import AuthService from "../services/auth.service";
import { withRouter } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import * as Axios from "axios";
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
function konversi(str) {
  return str.split("-").reverse().join("/");
}
export class Tasks extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        ("0" + today.getDate()).slice(-2) +
        "-" +
        ("0" + today.getMonth() + 1).slice(-2) +
        "-" +
        today.getFullYear(),
      minim =
        today.getFullYear() +
        "-" +
        ("0" + today.getMonth() + 1).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2);
    this.handleTask = this.handleTask.bind(this);
    this.state = {
      listtasks: [],
      deadline: "",
      status: "Berjalan",
      sisa: "",
      keterangan: "",
      mindate: minim,
      sekarang: date,
      currentUser: AuthService.getCurrentUser(),
      loading: false,
      successful: false,
      message: "",
      date: "",
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleTask(e) {
    const { currentUser } = this.state;
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Axios.post("http://localhost:8000/tasks", {
        userID: currentUser.id,
        deadline: this.state.deadline,
        status: this.state.status,
        keterangan: this.state.keterangan,
      }).then(
        (res) => {
          this.setState({
            message: res.data.message,
            successful: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
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
    const { currentUser } = this.state;
    var userid = currentUser.id;
    fetch("http://localhost:8000/tasks/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          listtasks: res,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  Sisa(current, dead) {
    const awal = new Date(current);
    const akhir = new Date(konversi(dead));
    var total = Math.abs(akhir - awal) / 1000;
    var days = Math.round(total / 86400);
    total -= days * 86400;
    const sisa = (akhir - awal) / (1000 * 60 * 60 * 24);
    return (
      <div>{sisa < -1 ? <p>Telah Berakhir</p> : <p>{days} hari lagi</p>}</div>
    );
  }
  CekStatus(status) {
    var pesan;
    if (status === "Berjalan") {
      pesan = (
        <div className='badge bg-warning rounded-pill w-50' role='alert'>
          Berjalan
        </div>
      );
    } else {
      pesan = (
        <div className='badge bg-success rounded-pill w-50' role='alert'>
          Selesai
        </div>
      );
    }
    return pesan;
  }

  render() {
    const { listtasks, mindate } = this.state;
    const EditTask = withRouter(({ history, id }) => (
      <button
        onClick={() => history.push("/edittasks/" + id)}
        className='btn btn-warning text-light me-3'>
        Edit Data
      </button>
    ));
    const DeleteTask = withRouter(({ history, id }) => (
      <button
        onClick={() => history.push("/deletetasks/" + id)}
        className='btn btn-danger text-light me-3'>
        Hapus Data
      </button>
    ));
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
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <Form
                    onSubmit={this.handleTask}
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
                            <button className='btn btn-primary rounded rounded-3'>
                              Tambah List
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
                  <br />
                  <table class='table table-light table-hover'>
                    <tbody>
                      <tr className='row fw-bold table-dark border-dark'>
                        <td className='col'>Deadline</td>
                        <td className='col'>Status</td>
                        <td className='col'>Sisa Hari</td>
                        <td className='col'>Keterangan List</td>
                        <td className='col-3' colspan='2'>
                          Aksi
                        </td>
                      </tr>
                      {listtasks.map((item, index) => (
                        <tr className='row' key={index}>
                          <td className='col'>{item.deadline}</td>
                          <td className='col'>{this.CekStatus(item.status)}</td>
                          <td className='col'>
                            {this.Sisa(mindate, item.deadline)}
                          </td>
                          <td className='col'>{item.keterangan}</td>
                          <td className='col-3'>
                            <EditTask id={item.id} />
                            <DeleteTask id={item.id} />
                          </td>
                        </tr>
                      ))}
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
