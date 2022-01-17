import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";

export class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Navbaruser konten='Maintenance' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaradmin />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <h2>Pemberitahuan Maintenance</h2>
                  <p>Jangan lupa untuk selalu melakukan Maintenance setiap
                    bulannya pada tanggal 4. Dan selalu melakukan backup data
                    setiap hari minggu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maintenance;
