import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { withRouter } from "react-router-dom";
import Select from "react-validation/build/select";
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
export class Finance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      message: "",
      successful: false,
      keuangan: [],
      tipe: "Pemasukan",
      pemasukan: 0,
      pengeluaran: 0,
      kategori: "Gaji",
      nominal: null,
      keterangan: null,
      sisa: 0,
    };
    this.CekNilai = this.CekNilai.bind(this);
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  CekNilai(nilai) {
    var result;
    if (nilai != null) {
      result = nilai;
    } else if (nilai == null) {
      result = 0;
    }
    return result;
  }
  addData(e) {
    const { currentUser } = this.state;
    e.preventDefault();
    this.setState({
      message: "",
      successful: false,
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Axios.post("http://localhost:8000/finances", {
        userID: currentUser.id,
        tipe: this.state.tipe,
        kategori: this.state.kategori,
        nominal: this.state.nominal,
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

    fetch("http://localhost:8000/finances/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          keuangan: res,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    fetch("http://localhost:8000/sisa/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sisa: res.sisa,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    fetch("http://localhost:8000/pemasukan/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pemasukan: res.pemasukan,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    fetch("http://localhost:8000/pengeluaran/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pengeluaran: res.pengeluaran,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { tipe, kategori, sisa, pemasukan, pengeluaran } = this.state;
    const EditFinance = withRouter(({ history, id }) => (
      <button
        onClick={() => history.push("/editfinance/" + id)}
        className='btn btn-warning text-light me-3'>
        Edit Data
      </button>
    ));
    const DeleteFinance = withRouter(({ history, id }) => (
      <button
        onClick={() => history.push("/deletefinance/" + id)}
        className='btn btn-danger text-light me-3'>
        Delete Data
      </button>
    ));
    return (
      <div>
        <Navbaruser konten='Catatan Keuangan' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <Form
                    onSubmit={this.addData.bind(this)}
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
                            <Select
                              name='tipe'
                              value={tipe}
                              className='w-25 border border-1'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}>
                              {tipe2.map((option) => (
                                <option value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Select>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Kategori</label>
                          </td>
                          <td className='col'>
                            <Select
                              name='kategori'
                              value={kategori}
                              className='w-25 border border-1'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}>
                              {kategori2.map((option) => (
                                <option value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Select>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Nominal</label>
                          </td>
                          <td className='col'>
                            <Input
                              name='nominal'
                              type='number'
                              value={this.state.nominal}
                              className='w-25 border border-1'
                              step='500'
                              min='500'
                              validations={[required]}
                              onChange={this.setValueState.bind(this)}></Input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <label className='fw-bold'>Keterangan</label>
                          </td>
                          <td className='col'>
                            <Input
                              name='keterangan'
                              value={this.state.keterangan}
                              className='w-25 border border-1'
                              validations={[required, vfield]}
                              onChange={this.setValueState.bind(this)}></Input>
                          </td>
                        </tr>
                        <tr className='row'>
                          <td className='col-2'>
                            <button className='btn btn-primary rounded rounded-3'>
                              Tambah Data
                            </button>
                          </td>

                          <div className=' fs-4 text-start mt-4'>
                            <p>
                              <span className='text-success'>
                                Total Pemasukan Rp {this.CekNilai(pemasukan)}{" "}
                              </span>
                              <br />
                              <span className='text-danger'>
                                Total Pengeluaran Rp{" "}
                                {this.CekNilai(pengeluaran)}
                              </span>
                              <br />
                              <span className='fw-bold'>
                                {" "}
                                Saldo saat ini {this.CekNilai(sisa)}
                              </span>
                            </p>
                          </div>

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
                      <tr className='row fw-bold table-dark border-dark mb-3'>
                        <td className='col'>Tipe</td>
                        <td className='col'>Kategori</td>
                        <td className='col'>Keterangan</td>
                        <td className='col'>Nominal</td>
                        <td className='col-3' colspan='2'>
                          Aksi
                        </td>
                      </tr>

                      {this.state.keuangan.map((item, index) => (
                        <tr className='row'>
                          <td className='col'>{item.tipe}</td>
                          <td className='col'>{item.kategori}</td>
                          <td className='col'>{item.keterangan}</td>
                          <td className='col'>Rp {item.nominal}</td>
                          <td className='col-3'>
                            <EditFinance id={item.id} />
                            <DeleteFinance id={item.id} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <div className='fw-bold fs-3 text-center ms-5 ps-5'>
                    <p>Total {total}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finance;
