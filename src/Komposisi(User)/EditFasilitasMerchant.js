import React, { Component } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import FacilityService from "../services/facility.service";
import { useHistory } from "react-router-dom";
import Sidebaruser from "../Komponen/Sidebar(login user)";
import categoryService from "../services/category.service";

class EditMerchant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: {
        merchantId: "",
        facility_name: "",
        banner_img: "",
        price: "",
        categoryId: "",
        time: ["00:00", "00:00"],
      },
      options: {
        category: [],
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleTambahFacility = this.handleTambahFacility.bind(this);
  }

  getDataUser = () => {
    if (localStorage.getItem("dataUser")) {
      return JSON.parse(localStorage.getItem("dataUser"));
    } else {
      return {};
    }
  };

  getDataCategory = () => {
    categoryService
      .getCategory()
      .then((res) => {
        console.log({ res });
        if (res?.message == "OK") {
          this.setState({
            options: {
              ...this.state.options,
              category: res.data.result?.map((item) => ({
                value: item?.id,
                label: item.category_name,
              })),
            },
          });
        }
      })
      .catch((err) => console.log({ err }));
  };

  componentWillMount() {
    this.getDataCategory();
    this.getDataUser();
    this.setState({
      params: {
        ...this.state.params,
        merchantId: this.getDataUser()?.id || null,
      },
    });
  }

  handleSelect(e) {
    console.log({ e: e.target.value });
    this.setState({
      params: {
        ...this.state.params,
        categoryId: e.target.value,
      },
    });
  }

  handleInput(e) {
    console.log({ e: e.target.value });
    this.setState({
      params: {
        ...this.state.params,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleTambahFacility() {
    try {
      const formData = new FormData();
      formData.append("categoryId", this.state.params.categoryId);
      formData.append("banner_img", this.state.params.banner_img);
      formData.append("facility_name", this.state.params.facility_name);
      formData.append("merchantId", this.state.params.merchantId);
      formData.append("price", this.state.params.price);
      formData.append("time", this.state.params.time);

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
  }

  render() {
    const { history } = this.props;
    const { options } = this.state;
    return (
      <div>
        <Navbaruser konten="Tambah Fasilitas" />
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
                      <AutoComplete
                        options={options.category}
                        onChange={this.handleSelect}
                      />
                      {/* <input style={{ borderRadius: 8 }} /> */}
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Fasilitas</td>
                    <td>
                      <input
                        style={{ borderRadius: 8 }}
                        onChange={this.handleInput}
                        value={this.state.params.facility_name}
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
                          this.setState({
                            params: {
                              ...this.state.params,
                              banner_img: e.target.files[0],
                            },
                          });
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
                      {/* <Button
                        className="fw-bold text-dark me-4"
                        style={{
                          background: "#c4f601",
                          border: "1px solid #C4f601",
                          borderRadius: "8px",
                          width: "157px",
                          height: "48px",
                        }}
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
                      >
                        <Logo />
                        <img />
                      </Button> */}
                    </td>
                  </tr>
                  <tr>
                    <td>Tarif Fasilitas</td>
                    <td>
                      <input
                        style={{ borderRadius: 8 }}
                        value={this.state.params.price}
                        onChange={this.handleInput}
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
                onClick={this.handleTambahFacility}
              >
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditMerchant);

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
