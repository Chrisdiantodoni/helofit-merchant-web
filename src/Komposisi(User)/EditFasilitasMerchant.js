import React, { useState, useEffect } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import FacilityService from "../services/facility.service";
import { useHistory } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import categoryService from "../services/category.service";

const EditMerchant = () => {
  const [params, setParams] = useState({
    merchantId: "",
    facility_name: "",
    banner_img: "",
    price: "",
    categoryId: "",
    time: ["00:00", "00:00"],
  });
  const [options, setOptions] = useState({
    category: [],
  });

  const history = useHistory();

  useEffect(() => {
    getDataCategory();
    getDataUser();
    setParams((prevState) => ({
      ...prevState,
      merchantId: getDataUser()?.id || null,
    }));
  }, []);

  const getDataUser = () => {
    if (localStorage.getItem("dataUser")) {
      return JSON.parse(localStorage.getItem("dataUser"));
    } else {
      return {};
    }
  };

  const getDataCategory = () => {
    categoryService
      .getCategory()
      .then((res) => {
        console.log({ res });
        if (res?.message == "OK") {
          setOptions((prevState) => ({
            ...prevState,
            category: res.data.result?.map((item) => ({
              value: item?.id,
              label: item.category_name,
            })),
          }));
        }
      })
      .catch((err) => console.log({ err }));
  };

  const handleSelect = (e) => {
    console.log({ e: e.target.value });
    setParams((prevState) => ({
      ...prevState,
      categoryId: e.target.value,
    }));
  };

  const handleInput = (e) => {
    console.log({ e: e.target.value });
    setParams((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTambahFacility = () => {
    try {
      const formData = new FormData();
      formData.append("categoryId", params.categoryId);
      formData.append("banner_img", params.banner_img);
      formData.append("facility_name", params.facility_name);
      formData.append("merchantId", params.merchantId);
      formData.append("price", params.price);
      formData.append("time", params.time);

      FacilityService.addFacility(formData).then((res) => {
        console.log({ res });
        if (res.message === "OK") {
          alert("berhasil menambahkan fasilitas");
          window.location.href = "/welcome/ProfilMerchant";
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbaruser konten="Tambah Fasilitas" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div className="container">
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
                    <AutoComplete
                      options={options.category}
                      onChange={handleSelect}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Nama Fasilitas</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      onChange={handleInput}
                      value={params.facility_name}
                      name="facility_name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Banner</td>
                  <td>
                    <input
                      type="file"
                      name=""
                      accept=".jpg,.jpeg,.png"
                      id=""
                      onChange={(e) => {
                        setParams((prevState) => ({
                          ...prevState,
                          banner_img: e.target.files[0],
                        }));
                        const img = document.getElementById("imgBanner");
                        img.src = URL.createObjectURL(e.target.files[0]);
                      }}
                    />
                    <img
                      src=""
                      alt=""
                      id="imgBanner"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tarif Fasilitas</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={params.price}
                      onChange={handleInput}
                      name="price"
                      type="number"
                    />{" "}
                    per jam / Sesi
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
              onClick={handleTambahFacility}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AutoComplete = ({ options = [], onChange }) => {
  return (
    <div>
      <select
        id="opt-datalist"
        className="form-select"
        style={{ width: "25%" }}
        onChange={onChange}
      >
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default withRouter(EditMerchant);
