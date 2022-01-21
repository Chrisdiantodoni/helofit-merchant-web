import React, { Component } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";

export class DataUser extends Component {
  constructor(props) {
    super(props);

    this.state = { datauser: [], namalengkap: "", password: "", email: "" };
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
    return (
      <div>
        <Navbaradmin konten='Data User' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaradmin />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <table class='table table-light table-hover'>
                    <tbody>
                      <tr className='row fw-bold table-dark border-dark'>
                        <td className='col'>Nama Lengkap</td>
                        <td className='col'>Password</td>
                        <td className='col'>Email</td>
                      </tr>
                      {this.state.datauser.map((item, index) => (
                        <tr className='row'>
                          <td className='col'>{item.NamaLengkap}</td>
                          <td className='col'>{item.password}</td>
                          <td className='col'>{item.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataUser;
