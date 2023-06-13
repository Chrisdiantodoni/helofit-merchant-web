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
import { Axios, currency } from "../utils";
import { useEffect } from "react";
import { Context } from "../context/index";
import moment from "moment";

const WelcomeUser = () => {
  const { merchantId } = useContext(Context);

  const location = useLocation();
  const [profil, setProfil] = useState(0);
  const storedData = localStorage.getItem("dataUser");
  const [booking, setbooking] = useState([]);
  const [allBooking, setAllBooking] = useState([]);
  console.log(JSON.parse(storedData));
  const [merchant, setMerchant] = useState({});
  useEffect(() => {
    getMerchant();
    getTask();
    getBooking();
  }, []);

  const [dataTask, setDataTask] = useState([]);

  const getMerchant = async () => {
    const response = await Axios.get(`/merchant/${merchantId}`);
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

  const getTask = async (search = "") => {
    const response = await Axios.get(
      `/task/${merchantId}?column_name=id&query=${search}`
    );
    const data = response.data?.data?.result;
    if (response.data?.message === "OK") {
      setDataTask(data || []);
    }

    console.log("dataTask", data);
  };

  const profilPercentage = () => {
    const percentage = 1 - profil.length / 10;
    const percetagee = percentage * 100;
    console.log(percetagee);
    return percetagee;
  };

  const getBooking = async () => {
    const response = await Axios.get(`/booking/${merchantId}`);
    const data = response?.data?.data;
    if (response.data.message === "OK") {
      console.log("booking", response);
      const today = moment().format("YYYY-MM-DD");
      const filteredDate = data?.filter(
        (booking) => booking.booking_date >= today
      );
      console.log("filtered data", filteredDate);
      setAllBooking(filteredDate);
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
    console.log(percentage);
    return percentage;
  };

  console.log(bookingPercentage());
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
                          Rp. {currency(merchant?.balance)}
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
                        <p className="card-text text-dark fw-bold">
                          {dataTask?.length} Tasks
                        </p>
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
                    <h6 className="fw-bold"> {profilPercentage()}/100%</h6>
                  </div>

                  <ProgressBar
                    completed={profilPercentage()}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor={
                      profilPercentage() > 75
                        ? "#28A745"
                        : profilPercentage() >= 50
                        ? "#FFC107"
                        : "#DC3545"
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
                    <h6 className="fw-bold"> {bookingPercentage()}/100%</h6>
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
                        : "#DC3545"
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
                    <h6 className="fw-bold"> 60/100%</h6>
                  </div>

                  <ProgressBar
                    completed={60}
                    isLabelVisible={false}
                    baseBgColor="#7c7c7c"
                    bgColor={
                      bookingPercentage() > 75
                        ? "#28A745"
                        : bookingPercentage() >= 50
                        ? "#FFC107"
                        : "#DC3545"
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
