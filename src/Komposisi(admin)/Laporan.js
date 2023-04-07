import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export class Laporan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAdmin: AuthService.getCurrentAdmin(),
      datauser: [],
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    fetch("http://localhost:8000/datauser/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          datauser: res,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { currentAdmin } = this.state;
    return (
      <div>
        <Navbaradmin konten='Laporan' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaradmin />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <h2>Download Laporan</h2>
                  <p>
                    Berikut adalah laporan yang dapat diunduh dalam bentuk
                    dokumen
                  </p>
                  <hr />
                  <h5 className='mb-5'>
                    <i><b>Rekap semua data user </b></i> <br />
                    <ReactHTMLTableToExcel
                      className='download-table-xls-button btn btn-primary mt-3'
                      table='laporanuser'
                      filename='datauser'
                      sheet='user'
                      buttonText='Download File'
                    />
                    <table
                      className='table d-none text-center border'
                      id='laporanuser'>
                      <tbody className='text-center border'>
                        <tr className='row' colspan='3'></tr>
                        <tr className='row'>
                          <td></td>
                          <td className='col'>Nama Lengkap</td>
                          <td className='col'>Password</td>
                          <td className='col'>Email</td>
                        </tr>
                        {this.state.datauser.map((item, index) => (
                          <tr className='row'>
                            <td></td>
                            <td className='col'>{item.NamaLengkap}</td>
                            <td className='col'>{item.password}</td>
                            <td className='col'>{item.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className='d-none'>{currentAdmin.username}</span>
      </div>
    );
  }
}

export default Laporan;
