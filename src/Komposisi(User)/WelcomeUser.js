import React, { Component, useState, useContext } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";

import { BiWallet } from "react-icons/bi";
import { TbSoccerField } from "react-icons/tb";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { useLocation } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import axios from "../services/axios";
import { currency } from "../utils";
import { useEffect } from "react";
import { Context } from "../context/index";
import moment from "moment";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const WelcomeUser = () => {
  const { merchantId } = useContext(Context);
  const [statusTask, setStatusTask] = useState([]);
  const [complete, setComplete] = useState([]);
  const location = useLocation();
  const [getHour, setGetHour] = useState([]);
  const [profil, setProfil] = useState(0);
  const storedData = localStorage.getItem("dataUser");
  const token = localStorage.getItem("token");
  const [booking, setbooking] = useState([]);
  const [allBooking, setAllBooking] = useState([]);
  const [dataPromo, setDataPromo] = useState([]);
  console.log(JSON.parse(storedData));
  console.log(token);
  const [merchant, setMerchant] = useState({});

  useEffect(() => {
    getMerchant();
    getTaskStatus();
    getTask();
    getBooking();
    getPromo();
  }, []);

  const getPromo = async () => {
    const response = await axios.get(`/promo/${merchantId}`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data;
      console.log(data);
      setDataPromo(data);
    }
  };
  const [dataTask, setDataTask] = useState([]);

  const getMerchant = async () => {
    const response = await axios.get(`/merchant/${merchantId}`);
    if (response.data.message === "OK") {
      const data = response.data?.data?.merchant_info;
      console.log(response);
      const emptyColumns = Object.keys(data).filter((key) => !data[key]);
      console.log("Kolom yang kosong:", emptyColumns);
      setProfil(emptyColumns);
      setMerchant(data);
    } else {
      console.log("Data Merchant tidak ada");
    }
  };

  const getTask = async () => {
    const response = await axios.get(`/task/${merchantId}`);
    const data = response.data?.data?.result;
    if (response.data?.message === "OK") {
      setDataTask(data || []);
    }

    console.log("dataTask", data);
  };

  const getTaskStatus = async (search = "") => {
    const response = await axios.get(
      `/task/list-task-user/${merchantId}?column_name=username&query=${search}`
    );
    const data = response?.data?.data?.result;
    setStatusTask(data);
    const filteredComplete = data.filter(
      (filter) => filter.status === "selesai"
    );
    setComplete(filteredComplete);
    console.log({ getTaskStatus: filteredComplete });
  };

  const profilPercentage = () => {
    const percentage = 1 - profil.length / 10;
    const percetagee = percentage * 100;
    return percetagee.toFixed(0);
  };

  const taskPercentage = () => {
    const percentage =
      (parseInt(complete.length) / parseInt(statusTask.length)) * 100;
    return percentage.toFixed(0);
  };

  const getBooking = async () => {
    const response = await axios.get(`/booking/${merchantId}`);
    const data = response?.data?.data;
    if (response.data.message === "OK") {
      console.log("booking", response);
      const today = moment().format("YYYY-MM-DD");
      const filteredDate = data?.filter(
        (booking) => booking.booking_date >= today
      );
      setAllBooking(filteredDate);
      console.log("All Booking", filteredDate);
      setGetHour(filteredDate);
      const filteredKeepBooking = data
        ?.filter((booking) => booking.show != true)
        .filter((booking) => booking.booking_date >= today);
      console.log("filtered booking", filteredKeepBooking);
      setbooking(filteredKeepBooking);
    }
  };

  const bookingPercentage = () => {
    const allbookingPercentage = allBooking.length;
    const bookingPercentage = booking.length;
    const percentage =
      (parseInt(bookingPercentage) / parseInt(allbookingPercentage)) * 100;
    return percentage.toFixed(0);
  };
  const timeLengths = getHour
    .filter((filter) => filter.show === false)
    .map((booking) => {
      const timeArray = JSON.parse(booking.time);
      return timeArray.length;
    });

  const sum = timeLengths.reduce((total, length) => total + length, 0);

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
                    <Link
                      style={{ color: "#000000", textDecoration: "none" }}
                      to={{ pathname: "/welcome/Dompet" }}
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
                            Rp. {currency(merchant?.balance)}
                          </p>
                        </div>
                        <div>
                          <BiWallet className="fs-3 mb-1" />
                        </div>
                      </div>
                    </Link>
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
                    <Link
                      style={{ color: "#000000", textDecoration: "none" }}
                      to={{ pathname: "/welcome/fasilitas" }}
                    >
                      <div
                        className="card-body text-start"
                        style={{ flexDirection: "row", display: "flex" }}
                      >
                        <div className="me-5">
                          <h6 className="card-title fw-bold text-success">
                            Reservasi yang Akan Berlangsung
                          </h6>
                          <p className="card-text text-dark fw-bold">
                            {sum} Jam
                          </p>
                        </div>
                        <div>
                          <TbSoccerField className="fs-3 mb-1" />
                        </div>
                      </div>
                    </Link>
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
                    <Link
                      style={{ color: "#000000", textDecoration: "none" }}
                      to={{ pathname: "/welcome/tasks" }}
                    >
                      <div
                        className="card-body text-start"
                        style={{ flexDirection: "row", display: "flex" }}
                      >
                        <div className="me-5">
                          <h6 className="card-title fw-bold text-success">
                            Tasks saat ini
                          </h6>
                          <p className="card-text text-dark fw-bold">
                            {dataTask?.length} Tasks
                          </p>
                        </div>
                        <div>
                          <MdOutlineTaskAlt className="fs-3 mb-1" />
                        </div>
                      </div>
                    </Link>
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
                    <Link
                      style={{ color: "#000000", textDecoration: "none" }}
                      to={{ pathname: "/welcome/tasks" }}
                    >
                      <div
                        className="card-body text-start"
                        style={{ flexDirection: "row", display: "flex" }}
                      >
                        <div className="me-5">
                          <h6 className="card-title fw-bold text-success">
                            Promo saat ini
                          </h6>
                          <p className="card-text text-dark fw-bold">
                            {dataPromo.length} Promo
                          </p>
                        </div>
                        <div>
                          <IoTicketOutline className="fs-3 mb-1" />
                        </div>
                      </div>
                    </Link>
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
                    <h6 className="fw-bold"> {profilPercentage()}/100%</h6>
                  </div>

                  <ProgressBar
                    completed={profilPercentage() ? profilPercentage() : 0}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor={
                      profilPercentage() > 75
                        ? "#28A745"
                        : profilPercentage() >= 50
                        ? "#FFC107"
                        : profilPercentage() < 50
                        ? "#DC3545"
                        : "#7c7c7c"
                    }
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
                    <h6 className="fw-bold">
                      {" "}
                      {bookingPercentage() > 0 ? bookingPercentage() : 0}/100%
                    </h6>
                  </div>

                  <ProgressBar
                    completed={bookingPercentage()}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor={
                      bookingPercentage() > 75
                        ? "#28A745"
                        : bookingPercentage() >= 50
                        ? "#FFC107"
                        : bookingPercentage() < 50
                        ? "#DC3545"
                        : "#7c7c7c"
                    }
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
                    <h6 className="fw-bold">
                      {" "}
                      {taskPercentage() > 0 ? taskPercentage() : 0}/100%
                    </h6>
                  </div>

                  <ProgressBar
                    completed={taskPercentage()}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor={
                      taskPercentage() > 75
                        ? "#28A745"
                        : taskPercentage() >= 50
                        ? "#FFC107"
                        : taskPercentage() < 50
                        ? "#DC3545"
                        : "#7c7c7c"
                    }
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

export default withRouter(WelcomeUser);
