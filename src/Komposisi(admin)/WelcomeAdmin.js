import React, { Component, useEffect, useState } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
import dasboradmin from "../Assets/dasboradmin.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";
import { Table } from "react-bootstrap";
import "./WelcomeAdmin.css";
import { AxiosAdmin } from "../utils";

const WelcomeAdmin = () => {
  const [data, setData] = useState([]);
  const [meetupData, setMeetupData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [promo, setPromo] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [merchantData, setMerchantData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);

  useEffect(() => {
    const today = moment().month("June").startOf("month");
    let newData = [];
    for (let i = 0; i <= 6; i++) {
      const date = today.clone().add(i, "months").format("MMM");
      const newDataPoint = { name: date, uv: Math.floor(Math.random() * 5000) };
      newData.push(newDataPoint);
    }
    setData(newData);
    getMeetup();
    getUserData();
    getTaskData();
    getmerchantData();
    getPromo();
    calculateYAxisData();
  }, []);
  const getMeetup = async () => {
    const response = await AxiosAdmin.get(`/room`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.room_info?.result;
      setMeetupData(data);
    }
  };

  const getUserData = async () => {
    const result = await AxiosAdmin.get(`/user`);
    console.log(result?.data?.data?.result);
    if (result?.data.message === "OK") {
      const data = result?.data?.data?.result;
      setDataUser(data);
    }
  };
  const getTaskData = async () => {
    const response = await AxiosAdmin.get(`/task`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.task_info?.result;
      setTaskData(data);
    }
  };
  const getmerchantData = async () => {
    const response = await AxiosAdmin.get(`/merchant`);
    if (response.data?.message === "OK") {
      const data = response?.data?.data?.merchant.result;
      console.log(response?.data);
      setMerchantData(data);
    }
  };

  const calculateYAxisData = () => {
    const meetupDataAll = meetupData.length;
    const userDataAll = dataUser.length;
    const dataTaskAll = taskData.length;
    const merchantDataAll = merchantData.length;
    const promoDataAll = promo.length;
    const yAxisData = [
      { name: "Total Reservasi/Transaksi", value: meetupDataAll },
      { name: "Total User", value: userDataAll },
      { name: "Total Merchant", value: merchantDataAll },
      { name: "Total Meetup", value: meetupDataAll },
      { name: "Total Tasks", value: dataTaskAll },
      { name: "Total Promo", value: promoDataAll },
    ];

    setYAxisData(yAxisData);
  };

  const getPromo = () => {};
  return (
    <div>
      <Navbaradmin konten="Dashboard Admin" />
      <div className="row">
        <div className="col-md-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-md-8 mt-5">
          <div className="container">
            <h5 className="text-dark fw-bold">Traffic Progress</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Perkembangan aplikasi dalam satu bulan
              </h6>
            </div>
            <div
              style={{
                marginTop: 15,
              }}
            >
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              </LineChart>
            </div>
            <h5 className="text-dark fw-bold pt-5">Aktivitas Sistem</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Ringkasan keseluruhan yang terjadi dalam sistem
              </h6>
            </div>
            <div className="d-flex flex-wrap pt-2">
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Reservasi/Transaksi</p>
                <p style={{ fontWeight: "700" }}>{meetupData.length}</p>
                <a style={{ color: "#28A745", fontWeight: "700" }}>
                  lihat detail
                </a>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total User</p>
                <p style={{ fontWeight: "700" }}>{dataUser.length}</p>
                <a style={{ color: "#28A745", fontWeight: "700" }}>
                  lihat detail
                </a>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Merchant</p>
                <p style={{ fontWeight: "700" }}>{merchantData.length}</p>
                <a style={{ color: "#28A745", fontWeight: "700" }}>
                  lihat detail
                </a>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Meetup</p>
                <p style={{ fontWeight: "700" }}>{meetupData.length}</p>
                <a style={{ color: "#28A745", fontWeight: "700" }}>
                  lihat detail
                </a>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Tasks</p>
                <p style={{ fontWeight: "700" }}>{taskData.length}</p>
                <a style={{ color: "#28A745", fontWeight: "700" }}>
                  lihat detail
                </a>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Promo</p>
                <p style={{ fontWeight: "700" }}>{promo.length}</p>
                <a style={{ color: "#28A745", fontWeight: "700" }}>
                  lihat detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAdmin;
