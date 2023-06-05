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
  const idFacility = props.location.state.id;
  const facilityName = props.location.state.facilityName;
  const { merchantId } = useContext(Context);
  const [clocks, setClocks] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  console.log({ idFacility, merchantId, facilityName, selectedDates });
  const [dates, setDates] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const today = new Date();
    let newDates = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);
      newDates.push(date);
    }
    setDates(newDates);
  }, []);

  const getHour = async (selectedDates) => {
    console.log({
      date: moment(selectedDates).format("YYYY-MM-DD"),
      merchantId,
      idFacility,
    });
    const response = await Axios.post(`/facility/time/${idFacility}`, {
      merchantId,
      selected_date: moment(selectedDates).format("YYYY-MM-DD"),
    }).catch((err) => {
      console.log({ err });
    });
    const data = response.data?.data?.list_time;
    setClocks(data);
    setChecked(data.map((item) => (item.available ? false : true)));
  };

  useEffect(() => {
    getHour();
  }, []);

  const handleChecked = (index) => {
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };
  const history = useHistory();
  return (
    <div>
      <Navbaruser konten="Fasilitas Merchant" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h4 className="text-dark fw-bold">Daftar Fasilitas</h4>
            <h5 className="text-muted fw-bold">
              Pantau aktivitas terkini dari fasilitas yang kamu miliki
            </h5>

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
                    {moment(selectedDates).format("DD-MM-YYYY")}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {dates.map((date, idx) => (
                      <Dropdown.Item
                        onClick={(e) => {
                          setSelectedDates(moment(date).format("YYYY-MM-DD"));
                          getHour(date);
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
                  borderless={true}
                  style={{ textAlign: "center" }}
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
                  {clocks?.map((item, index) => (
                    <tbody className="fw-bold">
                      <tr>
                        <td>{item.time}</td>
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                          }}
                        >
                          <Form>
                            <div className="">
                              <Form.Check
                                type="checkbox"
                                id={`default-checkbox-${index}`}
                                checked={checked[index]}
                                onChange={() => handleChecked(index)}
                              />
                            </div>
                          </Form>

                          {item.available ? "Tersedia" : "Terisi"}
                        </td>
                        <td>{item.available ? <input /> : item.username}</td>
                      </tr>
                    </tbody>
                  ))}
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
