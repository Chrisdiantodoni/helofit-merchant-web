import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";

export class WelcomeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAdmin: AuthService.getCurrentAdmin(),
      totaldata: 0,
    };
    this.CekNilai = this.CekNilai.bind(this);
  }
  CekNilai(nilai) {
    var result;
    if (nilai != null) {
      result = nilai;
    } else if (nilai == null) {
      result = 0;
    }
    return result;
  }
  componentDidMount() {
    fetch("http://localhost:8000/totaldatauser/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          totaldata: res.totaldata,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { currentAdmin, totaldata } = this.state;
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
                      Sudah
                      <span className='text-dark fw-bold'>
                        &nbsp;{this.CekNilai(totaldata)}&nbsp;
                      </span>
                      user terhubung <br />
                      dengan Taskita, semangat !
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className='d-none'>{currentAdmin.username}</span>
        </div>
      </div>
    );
  }
}

export default WelcomeAdmin;
