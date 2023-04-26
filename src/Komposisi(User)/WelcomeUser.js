import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import dasboruser from "../Assets/dasboruser.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BiWallet } from "react-icons/bi";
import { TbSoccerField } from "react-icons/tb";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { useLocation } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";

const WelcomeUser = () => {
  const location = useLocation();
  return (
    <div>
      <Navbaruser konten="Dashboard Merchant" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <div className="d-flex justify-content-center">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                  <div
                    className="card h-100"
                    style={{
                      border: "0.5px solid #7c7c7c",
                      borderRadius: 16,
                      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className="card-body text-start"
                      style={{ flexDirection: "row", display: "flex" }}
                    >
                      <div className="me-5">
                        <h6 className="card-title fw-bold text-success">
                          Dompet Merchant
                        </h6>
                        <p className="card-text text-dark fw-bold">
                          Rp. 200.000
                        </p>
                      </div>
                      <div>
                        <BiWallet className="fs-3 mb-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card h-100"
                    style={{
                      border: "0.5px solid #7c7c7c",
                      borderRadius: 16,
                      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className="card-body text-start"
                      style={{ flexDirection: "row", display: "flex" }}
                    >
                      <div className="me-5">
                        <h6 className="card-title fw-bold text-success">
                          Reservasi Hari ini
                        </h6>
                        <p className="card-text text-dark fw-bold">6 Jam</p>
                      </div>
                      <div>
                        <TbSoccerField className="fs-3 mb-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card h-100"
                    style={{
                      border: "0.5px solid #7c7c7c",
                      borderRadius: 16,
                      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className="card-body text-start"
                      style={{ flexDirection: "row", display: "flex" }}
                    >
                      <div className="me-5">
                        <h6 className="card-title fw-bold text-success">
                          Tasks saat ini
                        </h6>
                        <p className="card-text text-dark fw-bold">2 Tasks</p>
                      </div>
                      <div>
                        <MdOutlineTaskAlt className="fs-3 mb-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card h-100"
                    style={{
                      border: "0.5px solid #7c7c7c",
                      borderRadius: 16,
                      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className="card-body text-start"
                      style={{ flexDirection: "row", display: "flex" }}
                    >
                      <div className="me-5">
                        <h6 className="card-title fw-bold text-success">
                          Promo saat ini
                        </h6>
                        <p className="card-text text-dark fw-bold">2 Promo</p>
                      </div>
                      <div>
                        <IoTicketOutline className="fs-3 mb-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="mb-2 text-dark fw-bold">Performa Merchant</h4>
              <h5 className="mb-5 text-muted fw-bold">
                Tingkatkan terus kualitas fasilitas Anda agar makin dicintai
              </h5>
              <div
                style={{
                  background: "#F8F9FA",
                  border: "0.5px solid #7c7c7c",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div style={{ padding: 8 }}>
                  <div
                    className="d-flex justify-content-between"
                    style={{ flexDirection: "row" }}
                  >
                    <h6 className="fw-bold">Kelengkapan Profil Merchant</h6>
                    <h6 className="fw-bold"> 90/100%</h6>
                  </div>

                  <ProgressBar
                    completed={90}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor="#28A745"
                  />
                </div>
                <div style={{ padding: 8 }}>
                  <div
                    className="d-flex justify-content-between"
                    style={{ flexDirection: "row" }}
                  >
                    <h6 className="fw-bold">
                      Presentase customer yang melakukan reservasi
                    </h6>
                    <h6 className="fw-bold"> 80/100%</h6>
                  </div>

                  <ProgressBar
                    completed={80}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor="#28A745"
                  />
                </div>
                <div style={{ padding: 8 }}>
                  <div
                    className="d-flex justify-content-between"
                    style={{ flexDirection: "row" }}
                  >
                    <h6 className="fw-bold">
                      Capaian target customer menyelesaikan task
                    </h6>
                    <h6 className="fw-bold"> 60/100%</h6>
                  </div>

                  <ProgressBar
                    completed={60}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor="#FFC107"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// componentDidMount() {
//   const { currentUser } = this.state;
//   var userid = currentUser.id;
//   fetch("http://localhost:8000/sisa/" + userid)
//     .then((res) => res.json())
//     .then((res) => {
//       this.setState({
//         sisa: res.sisa,
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   fetch("http://localhost:8000/kegiatan/" + userid)
//     .then((res) => res.json())
//     .then((res) => {
//       this.setState({
//         kegiatan: res.kegiatan,
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

export default withRouter(WelcomeUser);
