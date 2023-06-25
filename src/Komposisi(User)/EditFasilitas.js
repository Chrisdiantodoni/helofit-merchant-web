import React, { Component, useEffect, useContext, useState } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Table, Form } from "react-bootstrap";
import { Context } from "../context/index";
import moment from "moment";
import { Axios } from "../utils";
import { useHistory } from "react-router-dom";

const EditFasilitas = (props) => {
  const [isSelected, setIsSelected] = useState();
  const [selectedBooking, setSelectedBooking] = useState([]);
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const idFacility = props.location?.state.id;
  const facilityName = props.location?.state.facilityName;
  const price = props.location?.state.price;
  const { merchantId } = useContext(Context);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const today = new Date();
    setIsSelected(moment(today).format("YYYY-MM-DD"));
    let newDates = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);
      newDates.push(date);
    }
    setDates(newDates);
  }, []);

  const getHour = async () => {
    const body = {
      merchantId,
      selected_date: moment(isSelected).format("YYYY-MM-DD"),
    };
    await Axios.post(`/facility/time/${idFacility}`, body)
      .then((response) => {
        console.log(response);
        const data = response.data?.data;
        setData(data || []);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getHour();
    if (selectedBooking.length != 0) {
      setSelectedBooking([]);
    }
  }, [isSelected]);

  const history = useHistory();

  const createBooking = async (e) => {
    const total = parseInt(price) * parseInt(selectedBooking.length);
    console.log(total);
    const body = {
      facilityId: idFacility,
      userId: null,
      time: JSON.stringify(selectedBooking.map((item) => item.time)),
      booking_date: isSelected,
      total,
      price,
      type: "",
    };
    console.log({ body });

    await Axios.post(`/booking`, body)
      .then((res) => {
        if (res) {
          console.log(res);
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSelectedBooking = (item) => {
    const findDuplicate = selectedBooking.find(
      (find) => find.time === item.time
    );

    if (!findDuplicate?.time) {
      // setData((state) => ({
      //   ...state,
      //   list_time: data?.list_time?.map((obj) =>
      //     obj.time === item.time
      //       ? {
      //           ...obj,
      //           available: false,
      //         }
      //       : obj
      //   ),
      // }));
      setSelectedBooking([...selectedBooking, item]);
    } else {
      // setData((state) => ({
      //   ...state,
      //   list_time: data?.list_time?.filter(
      //     (filter) => filter?.time != item.time
      //   ),
      // }));
      setSelectedBooking(
        selectedBooking.filter((filter) => filter.time !== item.time)
      );
    }
  };

  const validateSelectedBooking = (item) => {
    const findDuplicate = selectedBooking.find(
      (find) => find.time === item.time
    );

    if (findDuplicate?.time) {
      return findDuplicate?.time;
    } else {
      return;
    }
  };

  const handleConfirmPayment = (item) => {
    console.log(item);
  };

  return (
    <div>
      <Navbaruser konten="Fasilitas Merchant" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <div
              className="mt-4"
              style={{
                background: "#F8f9fa",
                padding: 24,
                borderRadius: 16,
                border: "1px solid #7c7c7c",
              }}
            >
              <div className="d-flex ">
                <h5 className="fw-bold text-dark col-10 md-6">
                  {facilityName}
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
                    {moment(isSelected).format("DD-MM-YYYY")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {dates.map((date, idx) => (
                      <Dropdown.Item
                        key={idx}
                        onClick={(e) => {
                          setIsSelected(moment(date).format("YYYY-MM-DD"));
                        }}
                      >
                        {moment(date).format("DD-MM-YYYY")}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Table
                  className="mt-3"
                  borderless
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <thead>
                    <tr
                      className="fw-bold"
                      style={{ background: "#28A745", color: "#FFFFFF" }}
                    >
                      <th>JAM BERMAIN</th>
                      <th>STATUS</th>
                      <th>PEMAIN</th>
                    </tr>
                  </thead>
                  <tbody style={{ alignItems: "center" }}>
                    {data.list_time?.map((item, index) => (
                      <tr style={{ height: "60px" }} key={index}>
                        <td
                          style={{
                            alignItems: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {item.time}
                        </td>
                        <td
                          style={{
                            alignItems: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {item.available ? (
                            <Form
                              style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                display: "flex",
                              }}
                            >
                              <Form.Check
                                label="Main Langsung/panjar diluar aplikasi"
                                key={item.time}
                                type="checkbox"
                                checked={
                                  validateSelectedBooking(item) === item.time
                                }
                                onChange={() => {
                                  if (item?.available) {
                                    handleSelectedBooking(item);
                                  }
                                }}
                              />
                            </Form>
                          ) : (
                            "Telah Terisi "
                          )}
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          {item.available ? (
                            <input
                              value="-"
                              disabled
                              style={{ textAlign: "center" }}
                            />
                          ) : (
                            <input
                              value={
                                item.username
                                  ? item.username
                                  : "Main Langsung/Panjar di luar aplikasi"
                              }
                              disabled
                              style={{ textAlign: "center" }}
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  className="fw-bold text-dark me-4"
                  style={{
                    background: "#F8F9FA",
                    border: "1px solid #161616",
                    borderRadius: "8px",
                    width: "157px",
                    height: "48px",
                  }}
                  onClick={() => history.goBack()}
                >
                  Batal
                </Button>
                <Button
                  className="fw-bold text-dark me-4"
                  style={{
                    background: "#c4f601",
                    border: "1px solid #C4f601",
                    borderRadius: "8px",
                    width: "157px",
                    height: "48px",
                  }}
                  onClick={createBooking}
                >
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditFasilitas);
