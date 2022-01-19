import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { withRouter } from "react-router-dom";
import * as Axios from "axios";
const tipe2 = [
  { value: "Pemasukan", label: "Pemasukan" },
  { value: "Pengeluaran", label: "Pengeluaran" },
];
const kategori2 = [
  { value: "Gaji", label: "Gaji" },
  { value: "Kendaraan", label: "Kendaraan" },
  { value: "Usaha", label: "Usaha" },
  { value: "Makanan", label: "Makanan" },
  { value: "Lainnya", label: "Lainnya" },
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
const vfield = (value) => {
  if (value.length < 3 || value.length > 100) {
    return (
      <div className='alert alert-danger w-25' role='alert'>
        Field harus berisi antara 3 dan 100 karakter.
      </div>
    );
  }
};
export class DeleteFinance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      successful: false,
      tipe: "Pemasukan",
      kategori: "Gaji",
      nominal: 0,
      keterangan: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
        "http://localhost:8000/finances/" + this.props.match.params.id,
        { body: JSON.stringify(this.state) }
      ).then(
        (res) => {
          this.setState({
            message: "Catatan berhasil didelete",
            successful: true,
          });
          setTimeout(() => {
            this.props.history.goBack();
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
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
    fetch("http://localhost:8000/finances/" + this.props.match.params.id)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          tipe: res.tipe,
          kategori: res.kategori,
          nominal: res.nominal,
          keterangan: res.keterangan,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { tipe, kategori } = this.state;
    return (
      <div>
        <Navbaruser konten='Delete Catatan Keuangan' />
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
                            <label className='fw-bold'>Tipe</label>
                          </td>
                          <td className='col'>
                            <select
                              name='tipe'
                              disabled
                              value={tipe}
                              className='w-25 border border-1'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}>
                              {tipe2.map((option) => (
                                <option value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Kategori</label>
                          </td>
                          <td className='col'>
                            <select
                              name='kategori'
                              value={kategori}
                              disabled
                              className='w-25 border border-1'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}>
                              {kategori2.map((option) => (
                                <option value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Nominal</label>
                          </td>
                          <td className='col'>
                            <input
                              name='nominal'
                              type='number'
                              disabled
                              value={this.state.nominal}
                              className='w-25 border border-1'
                              step='500'
                              min='500'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}></input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Keterangan</label>
                          </td>
                          <td className='col'>
                            <input
                              name='keterangan'
                              value={this.state.keterangan}
                              disabled
                              className='w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}></input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <button className='btn btn-danger rounded rounded-3'>
                              Delete Data
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

export default withRouter(DeleteFinance);
