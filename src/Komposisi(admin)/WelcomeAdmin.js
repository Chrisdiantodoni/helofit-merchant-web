import React, { Component, useEffect, useState } from "react";
import Navbaradmin from "../Komponen/Navbar(login admin)";
import Sidebaradmin from "../Komponen/Sidebar(login admin)";
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
import "./WelcomeAdmin.css";
import { AxiosAdmin, currency } from "../utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const WelcomeAdmin = () => {
  const [data, setData] = useState([]);
  const [dataMerchantLine, setDataMerchantLine] = useState([]);
  const [dataUserLine, setDataUserLine] = useState([]);
  const [meetupData, setMeetupData] = useState([]);
  const [reserveData, setReserveData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [promo, setPromo] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [merchantData, setMerchantData] = useState([]);
  const [adminData, setAdminData] = useState({});

  const dataAdmin = async () => {
    const storedUserData = await localStorage.getItem("dataAdmin");
    console.log({ storedUserData });
    const adminId = JSON.parse(storedUserData)?.id;
    getAdmin(adminId);
  };

  const getAdmin = async (adminId) => {
    const response = await AxiosAdmin.get(`/admin/${adminId}`);
    const data = response?.data?.data;
    console.log({ data });
    setAdminData(data);
  };

  const getMeetup = async () => {
    const response = await AxiosAdmin.get(`/room`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data?.room_info?.result;
      setMeetupData(data);
    }
  };
  const getReserve = async () => {
    try {
      const response = await AxiosAdmin.get(`/booking/all`);
      console.log(response);
      if (response?.data.message === "OK") {
        const data = response?.data?.data?.booking;
        setReserveData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const result = await AxiosAdmin.get(`/user`);
      console.log(result?.data?.data?.result);
      if (result?.data.message === "OK") {
        const data = result?.data?.data?.result;
        setDataUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getTaskData = async () => {
    try {
      const response = await AxiosAdmin.get(`/task`);
      console.log(response);
      if (response.data.message === "OK") {
        const data = response?.data?.data?.task_info?.result;
        setTaskData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getmerchantData = async () => {
    try {
      const response = await AxiosAdmin.get(`/merchant`);
      if (response.data?.message === "OK") {
        const data = response?.data?.data?.merchant.result;
        console.log(response?.data);
        setMerchantData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPromo = async () => {
    try {
      const response = await AxiosAdmin.get(`/promo`);
      console.log(response);
      if (response.data?.message === "OK") {
        const data = response?.data?.data?.result;
        setPromo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMeetup();
    getUserData();
    getTaskData();
    getPromo();
    getmerchantData();
    getReserve();
    dataAdmin();
  }, []);

  const calculateDataUser = async () => {
    if (dataUser.length === 0) {
      return;
    }
    const today = moment().startOf("month");
    const newData = [];

    for (let i = 6; i >= 0; i--) {
      const date = today.clone().subtract(i, "months").format("MMM");
      const filteredUserData = dataUser.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const uvValue = filteredUserData.length;
      console.log("Data User", { uvValue });
      const newDataPoint = { name: date, "Perkembangan User": uvValue };
      newData.push(newDataPoint);
      setDataUserLine(newData);
    }
  };
  const calculateTransaction = async () => {
    if (meetupData.length === 0 || merchantData.length === 0) {
      return;
    }
    const today = moment().startOf("month");
    const newData = [];

    for (let i = 6; i >= 0; i--) {
      const date = today.clone().subtract(i, "months").format("MMM");
      const filteredMeetupData = meetupData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const filteredReserveData = reserveData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );

      const uvValue = filteredMeetupData.length + filteredReserveData.length;
      console.log({ uvValue });
      const newDataPoint = { name: date, "Perkembangan Transaksi": uvValue };
      newData.push(newDataPoint);
      setData(newData);
    }
  };
  const calculateDataMerchant = async () => {
    if (merchantData.length === 0) {
      return;
    }
    const today = moment().startOf("month");
    const newData = [];

    for (let i = 6; i >= 0; i--) {
      const date = today.clone().subtract(i, "months").format("MMM");

      const filteredMerchantData = merchantData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );

      const uvValue = filteredMerchantData.length;
      console.log({ uvValue });
      const newDataPoint = { name: date, "Perkembangan Merchant": uvValue };
      newData.push(newDataPoint);
      setDataMerchantLine(newData);
    }
  };

  const calculateData = async () => {
    if (
      meetupData.length === 0 ||
      dataUser.length === 0 ||
      taskData.length === 0 ||
      merchantData.length === 0
    ) {
      return;
    }
    const today = moment().startOf("month");
    const newData = [];

    for (let i = 6; i >= 0; i--) {
      const date = today.clone().subtract(i, "months").format("MMM");
      const filteredMeetupData = meetupData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const filteredReserveData = reserveData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const filteredUserData = dataUser.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const filteredTaskData = taskData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const filteredMerchantData = merchantData.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );
      const filteredPromoData = promo.filter(
        (item) => moment(item.createdAt).format("MMM") === date
      );

      const uvValue =
        filteredMeetupData.length +
        filteredUserData.length +
        filteredReserveData.length +
        filteredTaskData.length +
        filteredMerchantData.length +
        filteredPromoData.length;
      console.log({ uvValue });
      const newDataPoint = { name: date, Perkembangan: uvValue };
      newData.push(newDataPoint);
    }
  };

  useEffect(() => {
    calculateDataMerchant();
    calculateTransaction();
    calculateDataUser();
  }, [merchantData, reserveData, dataUser]);
  return (
    <div>
      <Navbaradmin konten="Dashboard Admin" />
      <div className="row">
        <div className="col-md-2 sidebar-wrapper">
          <Sidebaradmin />
        </div>
        <div className="col-md-8 mt-5">
          <div className="container">
            <h5 className="text-dark fw-bold">Aktivitas Sistem</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Ringkasan keseluruhan yang terjadi dalam sistem
              </h6>
            </div>
            <div className="d-flex flex-wrap pt-2">
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Reservasi/Transaksi</p>
                <p style={{ fontWeight: "700" }}>{reserveData.length}</p>
                <Link
                  style={{ color: "#000000", textDecoration: "none" }}
                  to={{ pathname: "/admin/Reserve" }}
                >
                  <a style={{ color: "#28A745", fontWeight: "700" }}>
                    lihat detail
                  </a>
                </Link>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total User</p>
                <p style={{ fontWeight: "700" }}>{dataUser.length}</p>

                <Link
                  style={{ color: "#000000", textDecoration: "none" }}
                  to={{ pathname: "/admin/UserData" }}
                >
                  <a style={{ color: "#28A745", fontWeight: "700" }}>
                    lihat detail
                  </a>
                </Link>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Merchant</p>
                <p style={{ fontWeight: "700" }}>{merchantData.length}</p>
                <Link
                  style={{ color: "#000000", textDecoration: "none" }}
                  to={{ pathname: "/admin/Merchant" }}
                >
                  <a style={{ color: "#28A745", fontWeight: "700" }}>
                    lihat detail
                  </a>
                </Link>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Meetup</p>
                <p style={{ fontWeight: "700" }}>{meetupData.length}</p>
                <Link
                  style={{ color: "#000000", textDecoration: "none" }}
                  to={{ pathname: "/admin/meetup" }}
                >
                  <a style={{ color: "#28A745", fontWeight: "700" }}>
                    lihat detail
                  </a>
                </Link>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Tasks</p>
                <p style={{ fontWeight: "700" }}>{taskData.length}</p>
                <Link
                  style={{ color: "#000000", textDecoration: "none" }}
                  to={{ pathname: "/admin/tasks" }}
                >
                  <a style={{ color: "#28A745", fontWeight: "700" }}>
                    lihat detail
                  </a>
                </Link>
              </div>
              <div className="data-card">
                <p style={{ fontWeight: "700" }}>Total Promo</p>
                <p style={{ fontWeight: "700" }}>{promo.length}</p>
                <Link
                  style={{ color: "#000000", textDecoration: "none" }}
                  to={{ pathname: "/admin/Promo" }}
                >
                  <a style={{ color: "#28A745", fontWeight: "700" }}>
                    lihat detail
                  </a>
                </Link>
              </div>
            </div>

            <h5 className="text-dark fw-bold mt-5">
              Saldo Dompet Admin Saat ini
            </h5>
            <div className="d-flex justify-content-between">
              <h2 className=" fw-bold" style={{ color: "#28A745" }}>
                Rp. {currency(adminData?.balance)}
              </h2>
            </div>
            <h5 className="text-dark fw-bold pt-5">Traffic Progress</h5>
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
                <Line
                  type="monotone"
                  dataKey="Perkembangan Transaksi"
                  stroke="#8884d8"
                />
              </LineChart>
              <LineChart
                width={600}
                height={300}
                data={dataUserLine}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Perkembangan User"
                  stroke="#8884d8"
                />
              </LineChart>
              <LineChart
                width={600}
                height={300}
                data={dataMerchantLine}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Perkembangan Merchant"
                  stroke="#8884d8"
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAdmin;
