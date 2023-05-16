import React, { Component } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import dasboradmin from "../Assets/dasboradmin.png";

const WelcomeAdmin = () => {
  return (
    <div>
      <Navbaradmin konten="Dashboard Admin" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8">
          <div class="container mx-auto mt-5">
            <div class="shadow border border-1 rounded-3">
              <div className="row ms-4 mt-6 me-3 pe-5">
                <div class="col-6 mt-4 pt-2 text-bold">
                  <h2 className="text-secondary fw-bold">
                    Sudah
                    <span className="text-dark fw-bold"></span>
                    user terhubung dengan Taskita, semangat terus ya !
                  </h2>
                </div>
                <div class="col-6 text-bold">
                  <img
                    className="img rounded-3"
                    src={dasboradmin}
                    width={350}
                    height="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="d-none">"Username"</span>
      </div>
    </div>
  );
};

export default WelcomeAdmin;
