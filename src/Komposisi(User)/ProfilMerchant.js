import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Navbaruser from "../Komponen/Navbar(login user)";
import { withRouter } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as Logo } from "../Assets/Trash-bin.svg";
import { ReactComponent as LogoEdit } from "../Assets/Edit-Icon.svg";
import { moneyFormat } from "../utils/format";

import Sidebaruser from "../Komponen/Sidebar(login user)";
import { useQuery } from "react-query";
import merchantService from "../services/merchant.service";

const ProfilMerchant = () => {
  const getDataUser = () => {
    if (localStorage.getItem("dataUser")) {
      return JSON.parse(localStorage.getItem("dataUser"));
    } else {
      return {};
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getDetailMerchant"],
    queryFn: () => {
      return merchantService.getDetailMerchant(getDataUser()?.id);
    },
    onSuccess: (onSuccess) => {
      return onSuccess;
    },
    onError: (onError) => onError,
  });

  const parsingImgMerchant = (dataProps) => {
    if (dataProps) {
      return JSON.parse(dataProps?.data?.merchant_info?.img_merchant);
    } else {
      return [];
    }
  };

  const displayDayOpenMerchant = (merchantTime) => {
    const saturday = merchantTime["saturday"];
    const friday = merchantTime["friday"];
    const monday = merchantTime["monday"];
    const sunday = merchantTime["sunday"];
    const thursday = merchantTime["thursday"];
    const tuesday = merchantTime["tuesday"];
    const wednesday = merchantTime["wednesday"];

    return (
      <ul>
        <li>{monday?.length > 0 ? "monday" : ""}</li>
        <li>{tuesday?.length > 0 ? "tuesday" : ""}</li>
        <li>{wednesday?.length > 0 ? "wednesday" : ""}</li>
        <li>{thursday?.length > 0 ? "thursday" : ""}</li>
        <li>{friday?.length > 0 ? "friday" : ""}</li>
        <li>{saturday?.length > 0 ? "saturday" : ""}</li>
        <li>{sunday?.length > 0 ? "sunday" : ""}</li>
      </ul>
    );
  };

  console.log({ data });
  return (
    <div>
      <Navbaruser konten="Dompet Merchant" />
      <div className="row">
        <div className="col-2 sidebar-wrapper">
          <Sidebaruser />
        </div>
        {isLoading ? (
          <div>Loading.....</div>
        ) : (
          <div className="col-10 mt-5 main-content">
            <div class="container">
              <h5 className="text-dark fw-bold">Merchant</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Tampilkan informasi tempat olahraga Anda secara akurat
                </h6>

                <Link
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
                </Link>
              </div>
              <Table borderless={true}>
                <tbody className="fw-bold">
                  <tr>
                    <td>Nama Merchant</td>
                    <td>{data?.data?.merchant_info?.merchant_name || "-"}</td>
                  </tr>
                  <tr>
                    <td>Lokasi</td>
                    <td>{data?.data?.merchant_info?.address || "-"}</td>
                  </tr>
                  <tr>
                    <td>Deskripsi</td>
                    <td style={{ whiteSpace: "break-spaces" }}>
                      {data?.data?.merchant_info?.desc || "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Foto Merchant</td>
                    <td>
                      {data?.data?.merchant_info?.img_merchant
                        ? parsingImgMerchant(data)?.map((item, key) => {
                            return (
                              <img
                                src={item}
                                key={key}
                                width="50%"
                                height={100}
                                style={{ objectFit: "cover" }}
                              />
                            );
                          })
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Prasarana yang tersedia</td>
                    <td>
                      {data?.data?.feature_merchant?.map((item, idx) => {
                        return (
                          <h6 className="fw-bold">
                            > {item?.feature?.feature_name || "-"}
                          </h6>
                        );
                      }) || "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Jadwal buka</td>
                    <td>
                      <h6 className="fw-bold">
                        {displayDayOpenMerchant(data?.data?.merchant_time)}
                      </h6>
                      <h6 className="fw-bold">
                        {data?.data?.merchant_time?.monday[0] || "-"} -{" "}
                        {data?.data?.merchant_time?.monday[1] || "-"}
                      </h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div class="container">
              <h5 className="text-dark fw-bold">Detail Fasilitas</h5>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted fw-bold">
                  Tampilkan informasi fasilitas olahraga Anda
                </h6>

                <Link
                  to="/welcome/EditFasilitasMerchant"
                  className="fw-bold text-dark btn d-flex"
                  style={{
                    background: "#C4f601",
                    border: "0.5px solid #C4f601",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Tambah Fasilitas
                </Link>
              </div>
              {data?.data?.category_facility?.map((item, idx) => {
                if (item?.facility?.length > 0) {
                  return (
                    <DisplayListFailitas
                      category_name={item?.category_name}
                      facility={item?.facility}
                    />
                  );
                }
              }) || null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(ProfilMerchant);

const DisplayListFailitas = ({ category_name, facility }) => {
  return (
    <div>
      <Table borderless={true}>
        <tbody className="fw-bold">
          <tr>
            <td>Kategori</td>
            <td>{category_name}</td>
          </tr>
          <tr>
            <td>Jumlah Fasilitas</td>
            <td>{facility?.length} Fasilitas</td>
          </tr>
        </tbody>
      </Table>
      {facility?.length > 0
        ? facility?.map((item) => (
            <div
              className="mt-4"
              style={{
                background: "#F8f9fa",
                padding: 24,
                borderRadius: 16,
                border: "1px solid #7c7c7c",
              }}
            >
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Table borderless={true}>
                  <tbody className="fw-bold">
                    <tr>
                      <td>Nama Fasilitas</td>
                      <td>{item?.facility_name}</td>
                    </tr>

                    <tr>
                      <td>Banner</td>
                      <td>
                        <img
                          src={item?.banner_img}
                          alt="banner_img"
                          width="50%"
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Tarif</td>
                      <td>
                        {moneyFormat.format(item?.price || 0)} / {item?.uom}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    className="fw-bold text-dark me-4"
                    style={{
                      background: "#FFC107",
                      border: "1px solid #FFC107",
                      borderRadius: "8px",
                      height: "40%",
                    }}
                  >
                    <LogoEdit />
                    <img />
                  </Button>
                  <Button
                    className="fw-bold text-dark me-4"
                    style={{
                      background: "#DC3545",
                      border: "1px solid #DC3545",
                      borderRadius: "8px",
                      height: "40%",
                    }}
                  >
                    <Logo />
                    <img />
                  </Button>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
