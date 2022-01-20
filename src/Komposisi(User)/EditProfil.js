import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import * as Axios from "axios";
import Sidebaruser from "../Komponen/Sidebar(login user)";
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
  if (value.length < 3 || value.length > 30) {
    return (
      <div className='alert alert-danger w-25' role='alert'>
        Field harus berisi antara 3 dan 30 karakter.
      </div>
    );
  }
};
class EditProfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      message: "",
      successful: false,
      nama_dpn: "",
      id: this.props.match.params.id,
      nama_blkg: "",
      email: "",
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
      Axios.put("http://localhost:8000/user/" + this.props.match.params.id, {
        nama_dpn: this.state.nama_dpn,
        nama_blkg: this.state.nama_blkg,
        email: this.state.email,
      }).then(
        (res) => {
          localStorage.setItem("user", JSON.stringify(this.state));
          this.setState({
            message: "Profil berhasil diupdate",
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
    fetch("http://localhost:8000/user/" + this.props.match.params.id)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          nama_dpn: res.nama_dpn,
          nama_blkg: res.nama_blkg,
          email: res.email,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Navbaruser konten='Edit Profil User' />
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
                          <td className='col-2'>Nama Depan</td>
                          <td className='col'>
                            <Input
                              name='nama_dpn'
                              type='text'
                              value={this.state.nama_dpn}
                              className='form-control w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}></Input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>Nama Belakang</td>
                          <td className='col'>
                            <Input
                              name='nama_blkg'
                              type='text'
                              value={this.state.nama_blkg}
                              className='form-control w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}></Input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>Email</td>
                          <td className='col'>
                            <Input
                              name='email'
                              type='email'
                              value={this.state.email}
                              className='form-control w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}></Input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <button className='btn btn-warning text-light fw-normal rounded rounded-3'>
                              Ubah Profil
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

export default withRouter(EditProfil);
