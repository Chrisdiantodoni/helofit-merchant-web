import React, { Component } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import AuthService from "../services/auth.service";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
export class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAdmin: AuthService.getCurrentAdmin(),
      feedbacks: [],
      nama: "",
      email: "",
      pesan: "",
    };
  }
  setValueState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    fetch("http://localhost:8000/feedbacks/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          feedbacks: res,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { currentAdmin } = this.state;
    return (
      <div>
        <Navbaradmin konten='Feedback' />
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
                        <td className='col'>Nama</td>
                        <td className='col'>Email</td>
                        <td className='col'>Pesan</td>
                      </tr>
                      {this.state.feedbacks.map((item, index) => (
                        <tr className='row'>
                          <td className='col'>{item.nama}</td>
                          <td className='col'>{item.email}</td>
                          <td className='col'>{item.pesan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Feedback;
