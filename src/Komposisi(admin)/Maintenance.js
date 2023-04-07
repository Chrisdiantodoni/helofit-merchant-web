import React, { Component } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import AuthService from "../services/auth.service";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import { AiOutlineWarning } from "react-icons/ai";
export class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = { currentAdmin: AuthService.getCurrentAdmin() };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { currentAdmin } = this.state;
    return (
      <div>
        <Navbaradmin konten='Maintenance' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaradmin />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5 mb-5'>
                  <h2>Pemberitahuan Maintenance <nbsp/> <nbsp/> <AiOutlineWarning className='fs-2 text-danger' /></h2>
                  <p className='fs-3 mb-1'>
                    Jangan lupa untuk selalu melakukan Maintenance setiap
                    bulannya pada tanggal 4. Dan selalu melakukan backup data
                    setiap hari minggu
                  </p>
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

export default Maintenance;
