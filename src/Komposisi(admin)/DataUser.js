import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";

export class DataUser extends Component {
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
        <Navbaruser konten='Data User' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaradmin />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <button className='btn btn-primary rounded-3 float-end'>Tambah User</button>
                  <br/>
                  <br/>
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
