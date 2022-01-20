import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import notif from "../Assets/notifuser.PNG";
import Sidebaruser from "../Komponen/Sidebar(login user)";

class WelcomeUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      kegiatan: 0,
      sisa: 0,
      nama_dpn: "",
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
    const { currentUser } = this.state;
    var userid = currentUser.id;
    fetch("http://localhost:8000/sisa/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sisa: res.sisa,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    fetch("http://localhost:8000/kegiatan/" + userid)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          kegiatan: res.kegiatan,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { currentUser, sisa, kegiatan } = this.state;
    const saldo = JSON.stringify(localStorage.getItem("sisa"));
    return (
      <div>
        <Navbaruser konten='Dashboard User' />
        <div className='row'>
          <div className='col-2 sidebar-wrapper'>
            <Sidebaruser />
          </div>
          <div className='col-8'>
            <div class='container mx-auto mt-5'>
              <div class='shadow border border-1 rounded-3 w-100'>
                <div className='row ms-5 mb-5 mt-5 me-3 pe-5'>
                  <div class='col-6 text-bold'>
                    <h1 className='fs-1 text-secondary'>
                      Hai
                      <span className='text-dark fw-bold'>
                        &nbsp;{currentUser.nama_dpn}
                      </span>
                      , kamu memiliki <br />
                      <span className='text-dark fw-bold'>
                        {kegiatan}&nbsp;
                      </span>
                      kegiatan saat ini,
                      <br />
                      dan saldo keuangan kamu
                      <br />
                      berjumlah
                      <span className='text-dark fw-bold'>
                        &nbsp;Rp {this.CekNilai(sisa)}
                      </span>
                    </h1>
                  </div>
                  <div class='col-6 text-center'>
                    <img
                      className='img rounded-3'
                      src={notif}
                      width={350}
                      height={250}
                    />
                  </div>
                  {this.state.nama_dpn}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WelcomeUser);
