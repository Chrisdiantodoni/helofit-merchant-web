import React, { Component, useState, useEffect, useContext } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import moment from "moment";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios } from "../utils";
import { Context } from "../context/index";

const Fasilitas = () => {
  const [dates, setDates] = useState([]);
  const [facility, setFacility] = useState([]);
  const { merchantId } = useContext(Context);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [selectedDates, setSelectedDates] = useState({});
  const [clocks, setClocks] = useState({});

  useEffect(() => {
    let today = new Date();
    let newDates = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);
      newDates.push(date);
    }
    setDates(newDates);
  }, []);

  const getFacility = async () => {
    try {
      const response = await Axios.get(`/facility/${merchantId}`);
      console.log(response.data);

      if (response.data.message === "OK") {
        const data = response.data.data;
        setFacility(data);
        data.forEach((item) => {
          if (item) {
            getHour(item.id);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getHour = async (facilityId) => {
    console.log({
      date: moment(selectedDates[facilityId]).format("YYYY-MMM-DD"),
      merchantId,
      facilityId,
    });
    const response = await Axios.post(`/facility/time/${facilityId}`, {
      merchantId,
      selected_date: moment(selectedDates[facilityId]).format("YYYY-MM-DD"),
    }).catch((err) => {
      console.log({ err });
    });

    const data = response?.data?.data || [];
    setClocks((prevClocks) => ({
      ...prevClocks,
      [facilityId]: data,
    }));
  };
  useEffect(() => {
    getFacility();
  }, []);

  useEffect(() => {
    facility.forEach((item) => {
      if (!selectedDates[item.id]) {
        setSelectedDates((prevSelectedDates) => ({
          ...prevSelectedDates,
          [item.id]: moment().format("YYYY-MM-DD"),
        }));
      }
    });
  }, [facility]);

  useEffect(() => {
    facility.forEach((item) => {
      if (selectedFacility === item.id) {
        getHour(selectedFacility);
      }
    });
  }, [selectedFacility, selectedDates]);

  return (
    <div>
      <Navbaruser konten="Fasilitas Merchant" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div className="container">
            <h4 className="text-dark fw-bold">Daftar Fasilitas</h4>
            <h5 className="text-muted fw-bold">
              Pantau aktivitas terkini dari fasilitas yang kamu miliki
            </h5>

            {facility?.map((item, idx) => (
              <div
                className="mt-4"
                style={{
                  background: "#F8f9fa",
                  padding: 24,
                  borderRadius: 16,
                  border: "1px solid #7c7c7c",
                }}
                key={idx}
              >
                <div className="d-flex ">
                  <h5 className="fw-bold text-dark col-8 md-6">
                    {item.facility_name}
                  </h5>
                  <Dropdown className="col-2 sm-2 md-5">
                    <Dropdown.Toggle
                      className="fw-bold text-dark"
                      id="dropdown-basic"
                      style={{
                        background: "#FFFFFF",
                        border: "0.5px solid #7c7c7c",
                      }}
                    >
                      {moment(selectedDates[item.id]).format("DD-MM-YYYY")}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dates.map((date, idx) => (
                        <Dropdown.Item
                          key={idx}
                          onClick={() => {
                            setSelectedDates((prevSelectedDates) => ({
                              ...prevSelectedDates,
                              [item.id]: moment(date).format("YYYY-MM-DD"),
                            }));
                            setSelectedFacility(item.id);
                            getHour(item.id);
                          }}
                        >
                          {moment(date).format("DD-MM-YYYY").toUpperCase()}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Link
                    to={{
                      pathname: `/welcome/EditFasilitas`,
                      state: { id: item.id, selected_date: selectedDates },
                    }}
                    className="fw-bold text-dark btn"
                    style={{
                      background: "#C4f601",
                      border: "0.5px solid #C4f601",
                    }}
                  >
                    Ubah
                  </Link>
                </div>
                <div
                  className="d-grid mt-5"
                  style={{
                    gridTemplateColumns: "repeat(6, 1fr)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {clocks[item.id]?.list_time?.map((timeItem, idx) => (
                    <div
                      style={{
                        padding: "10px",
                      }}
                      key={idx}
                    >
                      <div
                        style={{
                          background: timeItem.available
                            ? "#28A745"
                            : "#7c7c7c",
                          borderRadius: 8,
                          width: "110px",
                          height: "55px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="text-light fw-bold">{timeItem.time}</h5>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <h6
                          className="mt-2 fw-bold"
                          style={{ textAlign: "center" }}
                        >
                          {timeItem.available ? "Tersedia" : timeItem?.username}
                        </h6>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <h6
                          className="mt-2 fw-bold"
                          style={{ textAlign: "center" }}
                        >
                          {timeItem?.phone_number}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Fasilitas);
