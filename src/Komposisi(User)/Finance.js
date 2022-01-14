import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaruser from "../Komponen/Sidebar(login user)";
export class Finance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      keuangan: [],
      tipe: "",
      kategori: null,
      nominal: null,
      keterangan: null,
      total: 0,
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  setTipe(e) {
    this.setState({
      tipe: e.target.value,
    });
  }
  addData() {
    var data_tmp = this.state.keuangan;
    var tipe = this.state.tipe;
    var nominal = parseInt(this.state.nominal);

    if (tipe == "Pemasukan") {
      this.state.total += nominal;
    } else if (tipe == "Pengeluaran") {
      this.state.total -= nominal;
    }
    // else {
    //     window.alert('Pilih Tipe untuk Total yang benar')
    // }

    data_tmp.push({
      tipe: this.state.tipe,
      kategori: this.state.kategori,
      total: this.state.total,
      nominal: this.state.nominal,
      keterangan: this.state.keterangan,
    });
    this.setState({ keuangan: data_tmp });
  }

  render() {
    const { currentUser } = this.state;
    const tipeoption = [
      { value: "Pemasukan", label: "Pemasukan" },
      { value: "Pengeluaran", label: "Pengeluaran" },
    ];
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
                <div className='ms-5 mt-5 me-5 pe-5'>
                  <table class='table table-borderless'>
                    <tbody>
                      <tr className='row'>
                        <td className='col-2'>
                          <label className='fw-bold'>Tipe</label>
                        </td>
                        <td className='col'>
                          <select
                            name='tipe'
                            value={this.state.tipe}
                            className='w-25 border border-1 '
                            onChange={this.setTipe.bind(this)}
                            options={tipeoption}></select>
                        </td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>
                          <label className='fw-bold'>Kategori</label>
                        </td>
                        <td className='col'>
                          <select
                            name='kategori'
                            value={this.state.kategori}
                            className='w-25 border border-1'
                            onChange={this.setValueState.bind(this)}>
                            <option value='Gaji'>Gaji</option>
                            <option value='Kendaraan'>Kendaraan</option>
                            <option value='Usaha'>Usaha</option>
                            <option value='Makanan'>Makanan</option>
                            <option value='Lainnya'>Lainnya</option>
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
                            value={this.state.nominal}
                            className='w-25 border border-1'
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
                            className='w-25 border border-1'
                            onChange={this.setValueState.bind(this)}></input>
                        </td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>
                          <button
                            onClick={this.addData.bind(this)}
                            className='btn btn-primary rounded rounded-3'>
                            Tambah Data
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <table class='table table-light table-hover'>
                    <tbody>
                      <tr className='row fw-bold border-dark'>
                        <td className='col-md-2'>Tipe</td>
                        <td className='col-md-1'>Kategori</td>
                        <td className='col-md-3'>Keterangan</td>
                        <td className='col-md-2'>Nominal</td>
                        <td className='col-md-3' colspan='2'>
                          Aksi
                        </td>
                      </tr>

                      {this.state.keuangan.map((item, index) => (
                        <tr className='row'>
                          <td className='col-md-2'>{item.tipe}</td>
                          <td className='col-md-1'>{item.kategori}</td>
                          <td className='col-md-3'>{item.keterangan}</td>
                          <td className='col-md-2'>{item.nominal}</td>
                          <td className='col-md-3'>
                            <button className='btn btn-warning text-light me-3'>
                              Edit Data
                            </button>
                            <button className='btn btn-danger'>
                              Hapus Data
                            </button>
                          </td>
                        </tr>
                      ))}
                      {this.state.tipe}
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

export default Finance;
