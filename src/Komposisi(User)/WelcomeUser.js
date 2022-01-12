import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";
class WelcomeUser extends Component {
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
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Navbaruser konten='Dashboard User' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div className='container'>
              <h3 className='mt-2'>
                <strong>{currentUser.nama_dpn}</strong> Profile
              </h3>
              <p>
                <strong>Token :</strong>
                {currentUser.accessToken.substring(0, 20)} ...
                {currentUser.accessToken.substr(
                  currentUser.accessToken.length - 20
                )}
              </p>
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
    );
  }
}

export default withRouter(WelcomeUser);
