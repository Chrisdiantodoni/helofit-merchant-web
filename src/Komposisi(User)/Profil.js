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
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  render() {
    const { currentUser } = this.state;
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
                  <table class='table table-borderless'>
                    <tbody>
                      <tr>
                        <td className='mt-2 h3'>
                          Profil {currentUser.nama_dpn}
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className='mt-2'>
                    Profil <strong>{currentUser.nama_dpn}</strong>
                  </h3>
                  <p>Nama Depan : {currentUser.nama_dpn}</p>
                  <p>
                    <strong>Id:</strong> {currentUser.id}
                  </p>
                  <p>
                    <strong>Email :</strong> {currentUser.email}
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

export default withRouter(Profil);
