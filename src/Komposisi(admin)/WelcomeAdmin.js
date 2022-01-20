import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";

export class WelcomeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    const admin = AuthService.getCurrentAdmin();

    if (admin) {
      this.setState({
        currentAdmin: admin,
      });
    }
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Navbaradmin konten='Dashboard Admin' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaradmin />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3'>
                <div className='ms-5 mt-5 me-3 pe-5'>
                  <div class='col-7 text-bold'>
                    <h2 className='text-secondary fw-bold'>
                      Sudah 14223 user terhubung <br />
                      dengan Taskita, semangat !
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeAdmin;
