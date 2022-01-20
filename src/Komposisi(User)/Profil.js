import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";
class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    const EditProfil = withRouter(({ history, id }) => (
      <button
        onClick={() => history.push("/editprofil/" + id)}
        className='btn btn-warning text-light fw-normal rounded rounded-3'>
        Edit Profil
      </button>
    ));
    return (
      <div>
        <Navbaruser konten='Profil User' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <h3 className='mt-2'>
                    Profil <strong>User</strong>
                  </h3>
                  <table class='table table-borderless'>
                    <tbody>
                      <tr className='row'>
                        <td className='col-2'>Nama Depan</td>
                        <td className='col-2'>:&emsp;{currentUser.nama_dpn}</td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>Nama Belakang</td>
                        <td className='col-2'>
                          :&emsp;{currentUser.nama_blkg}
                        </td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>Email</td>
                        <td className='col-2'>:&emsp;{currentUser.email}</td>
                      </tr>
                      <tr className='row'>
                        <td className='col-2'>
                          <EditProfil id={currentUser.id} />
                        </td>
                      </tr>
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

export default withRouter(Profil);
