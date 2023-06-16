import React, { Component, useRef, useContext, useEffect } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import { useState } from "react";
import { Context } from "./../context/index";
import { Axios, currency } from "../utils";
import { useHistory } from "react-router-dom";

const EditEachFacility = (props) => {
  const facilityId = props.location.state.id;
  const history = useHistory();
  const { merchantId } = useContext(Context);
  const [category, setCategory] = useState("");
  const [numFacility, setNumFacility] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const fileInputRef = useRef(null);

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

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    console.log(selectedBanner);
  }, [selectedBanner]);

  useEffect(() => {
    getDetailPromo();
  }, []);

  const handleEditFasilitas = async () => {
    const formData = new FormData();
    formData.append("facility_name", facilityName);
    formData.append("price", price);
    formData.append("banner_img", selectedBanner);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + JSON.stringify(pair[1]));
    }

    await Axios.put(`/facility/detail/${facilityId}`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log({ err }));
  };

  const getDetailPromo = async () => {
    const response = await Axios.get(`/facility/Detail/${facilityId}`);
    console.log(response);
    if (response.data.message === "OK") {
      const data = response?.data?.data;
      console.log(data);
      setCategory(data?.category?.category_name);
      setFacilityName(data?.facility_name);
      setPreviewImage(data?.banner_img);
      setPrice(data?.price);
    }
  };
  return (
    <div>
      <Navbaruser konten="Edit Promo" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Detail Fasilitas</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Tampilkan informasi fasilitas olahraga Anda
              </h6>
            </div>
            <Table borderless={true}>
              <tbody className="fw-bold">
                <tr>
                  <td>Kategori</td>
                  <td>
                    <input
                      disabled={true}
                      style={{ borderRadius: 8 }}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Nama Fasilitas</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={facilityName}
                      onChange={(e) => setFacilityName(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Banner</td>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  <td>
                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#c4f601",
                        border: "1px solid #C4f601",
                        borderRadius: "8px",
                        width: "157px",
                        height: "48px",
                      }}
                      onClick={handleButtonClick}
                    >
                      Tambah Foto
                    </Button>
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
                  <td>Tarif</td>
                  <td>
                    <input
                      value={price}
                      style={{
                        borderRadius: 8,
                      }}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    per Jam / Sesi
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
              onClick={() => history.goBack()}
            >
              Batal
            </Button>
            <Button
              className="fw-bold text-dark me-4 mb-5"
              style={{
                background: "#FFC107",
                border: "1px solid #FFC107",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
              onClick={handleEditFasilitas}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditEachFacility);
