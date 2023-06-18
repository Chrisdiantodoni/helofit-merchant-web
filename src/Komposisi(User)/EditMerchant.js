import React, { useEffect, useState, useRef } from "react";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import Axios from "../services/axios";

import Sidebaruser from "../Komponen/Sidebar(login user)";

const EditMerchant = () => {
  const dataUser = localStorage.getItem("dataUser")
    ? JSON.parse(localStorage.getItem("dataUser"))
    : {};

  const [merchantInfo, setMerchantInfo] = useState({});
  const [feature, setFeature] = useState([]);
  const [merchantTime, setMerchantTime] = useState({});
  const [listFeature, setListFeature] = useState([]);
  const [imgBanner, setImgBanner] = useState("");

  const change_photo = useRef(null);

  console.log({ dataUser });

  const getDetailMerchant = async () => {
    const response = await Axios.get(`/merchant/${dataUser?.id || null}`);

    if (response.data?.message === "OK") {
      setMerchantInfo(response.data?.data?.merchant_info);
      setFeature(
        response.data?.data?.feature_merchant?.map((item) => item.feature)
      );
      setMerchantTime(response.data?.data?.merchant_time);
    }
  };
  const getListFeature = async () => {
    const response = await Axios.get(`/feature`);

    console.log({ response: response.data.data?.result });
    setListFeature(response.data.data?.result);
  };

  useEffect(() => {
    getDetailMerchant();
    getListFeature();
  }, []);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setMerchantInfo((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const isCheckedFeature = (item) => {
    const findDuplicate = feature.find((find) => find?.feature_name == item);

    if (findDuplicate) {
      return true;
    } else {
      return false;
    }
  };

  const getDAsyinWeek = () => {
    const hari = Object.keys(merchantTime).filter((key) =>
      [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ].includes(key)
    );

    const hariDanNilai = hari.map((key) => {
      return {
        hari: key,
        time: merchantTime[key],
      };
    });
    return hariDanNilai;
  };

  const getTimeOpenAndClose = () => {
    const nilaiDenganNilai = getDAsyinWeek().filter(
      (item) => item.time !== "" && item.time.length > 0
    );

    return {
      open: nilaiDenganNilai[0]?.time[0],
      close: nilaiDenganNilai[0]?.time[1],
    };
  };

  const handleCheckBoxFeature = (event) => {
    const findDuplicate = feature.find(
      (find) => find?.feature_name == event.target.value
    );

    if (findDuplicate) {
      setFeature(
        feature.filter(
          (filter) => filter.feature_name !== findDuplicate?.feature_name
        )
      );
    } else {
      setFeature([
        ...feature,
        listFeature.find((find) => find.feature_name == event.target.value),
      ]);
    }
  };

  const handleCheckboxSchedule = (type) => {
    const findDayEmpty = merchantTime[type.hari];

    console.log(findDayEmpty);

    if (findDayEmpty?.length == 2) {
      setMerchantTime((state) => ({
        ...state,
        [type.hari]: "",
      }));
    } else {
      setMerchantTime((state) => ({
        ...state,
        [type.hari]: [getTimeOpenAndClose().open, getTimeOpenAndClose().close],
      }));
    }
  };

  const displayImg = () => {
    if (imgBanner) {
      return URL.createObjectURL(imgBanner);
    }
    return;
  };

  const handleChangePhoto = (e) => {
    setImgBanner(e.target.files[0]);
    e.target.value = null;
  };

  const deleteImg = () => {
    setImgBanner("");
  };

  const saveEditMerchant = async () => {
    const payload = {
      merchant_name: merchantInfo?.merchant_name,
      address: merchantInfo?.address,
      desc: merchantInfo?.desc,
      merchant_feature: JSON.stringify(feature),
      merchant_time: JSON.stringify(merchantTime),
      banner_img: imgBanner,
    };

    const formData = new FormData();

    for (const item in payload) {
      formData.append(item, payload[item]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const response = await Axios.put(
        `/merchant/${dataUser?.id || null}`,
        formData
      );
      console.log({ response });
      window.alert("Edit Profil Mitra Berhasil");
      window.location.href = "/welcome/ProfilMerchant";
      await getDetailMerchant();
    } catch (error) {
      console.log(error);
      window.alert("Gagal Edit Profil Mitra");
    }
  };
  return (
    <div>
      <Navbaruser konten="Edit Merchant" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        <div className="col-10 mt-5">
          <div class="container">
            <h5 className="text-dark fw-bold">Merchant</h5>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted fw-bold">
                Tampilkan informasi tempat olahraga Anda secara akurat
              </h6>

              {/* <Link
                to="/welcome/EditMerchant"
                className="fw-bold text-dark btn d-flex"
                style={{
                  background: "#C4f601",
                  border: "0.5px solid #C4f601",
                  justifyContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                Ubah
              </Link> */}
            </div>
            <Table borderless={true}>
              <tbody className="fw-bold">
                <tr>
                  <td>Nama Merchant</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={merchantInfo?.merchant_name}
                      name="merchant_name"
                      onChange={handleOnChangeInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Lokasi</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={merchantInfo?.address}
                      name="address"
                      onChange={handleOnChangeInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Deskripsi</td>
                  <td>
                    <input
                      style={{ borderRadius: 8 }}
                      value={merchantInfo?.desc}
                      name="desc"
                      onChange={handleOnChangeInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Foto Merchant</td>
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
                      onClick={() => change_photo.current.click()}
                    >
                      Ganti Foto
                    </Button>
                    <input
                      type="file"
                      name=""
                      id="change_photo"
                      ref={change_photo}
                      hidden
                      // accept=".PNG,.JPG,.JPEG.AVIF"
                      onChange={handleChangePhoto}
                    />
                    <Button
                      className="fw-bold text-dark me-4"
                      style={{
                        background: "#DC3545",
                        border: "1px solid #DC3545",
                        borderRadius: "8px",
                      }}
                      onClick={deleteImg}
                    >
                      <Logo />
                    </Button>
                    <img
                      src={displayImg() || merchantInfo?.img_merchant}
                      width={500}
                      height={250}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Prasarana yang tersedia</td>
                  <td>
                    <Form>
                      {listFeature.map((type) => (
                        <div key={"default-checkbox"} className="mb-3">
                          <Form.Check
                            type={"checkbox"}
                            id={`${type.feature_name}`}
                            label={`${type.feature_name}`}
                            checked={isCheckedFeature(type.feature_name)}
                            value={type.feature_name}
                            onChange={handleCheckBoxFeature}
                          />
                        </div>
                      ))}
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>Jadwal buka</td>
                  <td>
                    {console.log({
                      getDAsyinWeek: getDAsyinWeek(),
                      merchantTime,
                    })}
                    <Form>
                      {getDAsyinWeek().map((type) => (
                        <div key={"default-checkbox"} className="mb-3">
                          <Form.Check
                            type={"checkbox"}
                            id={`${type.hari}`}
                            label={`${type.hari}`}
                            checked={type.time?.length == 2 ? true : false}
                            onChange={() => handleCheckboxSchedule(type)}
                          />
                        </div>
                      ))}
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>Jam buka</td>
                  <td>{getTimeOpenAndClose().open}</td>
                </tr>
                <tr>
                  <td>Jam Tutup</td>
                  <td>{getTimeOpenAndClose().close}</td>
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
                background: "#c4f601",
                border: "1px solid #C4f601",
                borderRadius: "8px",
                width: "157px",
                height: "48px",
              }}
              onClick={saveEditMerchant}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditMerchant);
