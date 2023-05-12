import React, { Component, useState, useRef } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";

import Sidebaruser from "../Komponen/Sidebar(login user)";
import { Axios } from "../utils";

const AddTask = () => {
  const data = [
    {
      kode_reservasi: "135780",
      tanggal: "12/06/22",
      jam: "17:00",
      fasilitas: "Lapangan 1",
      nama_cust: "Rudi Suprapto",
      no_hp: "085297614911",
      Total_Biaya: "Rp.100.000",
    },
    {
      kode_reservasi: "135780",
      tanggal: "12/06/22",
      jam: "17:00",
      fasilitas: "Lapangan 1",
      nama_cust: "Rudi Suprapto",
      no_hp: "085297614911",
      Total_Biaya: "Rp.100.000",
    },
  ];
  const [taskName, setTaskName] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [expiredDate, setExpiredDate] = useState("");
  const [listTask1, setListTask1] = useState("");
  const [listTask2, setListTask2] = useState("");
  const [listTask3, setListTask3] = useState("");
  const [price, setPrice] = useState(0);

  function handleImageChange(event) {
    const image = event.target.files[0];
    setSelectedBanner(image);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(image);
  }
  function handleRemoveClick() {
    setSelectedBanner(null);
    setPreviewImage(null);
  }
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleAddTask = async (poin) => {
    const formData = new FormData();
    const body = {
      task_name: taskName,
      expiredIn: expiredDate,
      poin: totalPoin,
      "list[0].task_name": listTask1,
      "list[1].task_name": listTask2,
      "list[2].task_name": listTask3,
      banner_img: formData.append("banner_img", selectedBanner),
    };
    const response = Axios.post(`/task`, formData);
    console.log(response);
    console.log(body);
  };

  const totalPoin = (price) => {
    const poin = price * 0.1;
    return poin;
  };

  return (
    <div>
      <Navbaruser konten="Add Fasilitas" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Tambah Fasilitas</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Berikan daftar task yang dapat customer kerjakan
              </h6>
            </div>
            <Table borderless={true}>
              <tbody className="fw-bold">
                <tr>
                  <td>Judul task</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Banner</td>
                  <td>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      style={{}}
                    />

                    {/* <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#c4f601",
                        border: "1px solid #C4f601",
                        borderRadius: "8px",
                        width: "157px",
                        height: "48px",
                      }}
                      onChange={handleClick}
                    >
                      Tambah Foto
                    </Button> */}

                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#DC3545",
                        border: "1px solid #DC3545",
                        borderRadius: "8px",
                      }}
                      onClick={handleRemoveClick}
                    >
                      <Logo />
                      <img />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {previewImage && (
                      <div>
                        <img
                          src={previewImage}
                          style={{ width: 430, height: 130 }}
                          alt="Preview"
                        />
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Berlaku Sampai</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      type="date"
                      value={expiredDate}
                      onChange={(e) => setExpiredDate(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Task ke-1</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={listTask1}
                      onChange={(e) => setListTask1(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Task ke-2</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={listTask2}
                      onChange={(e) => setListTask2(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Task ke-3</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={listTask3}
                      onChange={(e) => setListTask3(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Biaya yang dikeluarkan customer</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    per keseluruhan task
                  </td>
                </tr>
                <tr>
                  <td>Poin yang didapatkan</td>
                  <td>
                    <input
                      value={totalPoin(price)}
                      disabled={true}
                      style={{
                        borderRadius: 8,
                        border: "none",
                        backgroundColor: "#D9D9D9",
                      }}
                    />
                  </td>
                </tr>
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
            >
              Batal
            </Button>
            <Button
              className="fw-bold text-dark me-4 mb-5"
              style={{
                background: "#C4f601",
                border: "1px solid #C4f601",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
              onClick={handleAddTask}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddTask);
