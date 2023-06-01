import React, { Component, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Sidebaradmin } from "../Komponen/Sidebar(login admin)";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import { Table } from "react-bootstrap";
import { AxiosAdmin } from "../utils";
import moment from "moment";

const Meetup = () => {
  const [meetupData, setMeetupData] = useState([]);

  const getMeetup = async () => {
    const response = await AxiosAdmin.get("/room");
    if (response?.data?.message === "OK") {
      const data = response?.data?.data?.room_info;
      setMeetupData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getMeetup();
  }, []);
  return (
    <div>
      <Navbaradmin konten="Laporan" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-8 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Data Meetup</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikut adalah data meetup yang user lakukan
              </h6>
            </div>

            <div className="justify-content-center d-flex mt-5">
              <Table borderless={true}>
                <thead>
                  <tr
                    className="fw-bold"
                    style={{
                      background: "#28A745",
                      color: "#FFFFFF",
                      borderRadius: 8,
                    }}
                  >
                    <th>Tanggal</th>
                    <th>Judul Meetup</th>
                    <th>Kuota</th>
                    <th>Host Room</th>
                    <th>Jenis Olahraga</th>
                    <th>Merchant</th>
                    <th>Total Biaya</th>
                  </tr>
                </thead>
                {meetupData.map((item, idx) => (
                  <tbody className="fw-bold">
                    <tr>
                      <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                      <td>{item.room_name}</td>
                      <td>{item.max_capacity}</td>
                      <td>{item?.user?.username}</td>
                      <td>{item.Jenis_Olahraga}</td>
                      <td>{item.Merchant}</td>
                      <td>{item.booking?.total}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Meetup);
