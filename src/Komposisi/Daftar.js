import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Navbarbefore from "../Komponen/Navbar(before login)";
import { Axios } from "../utils";

const Daftar = () => {
  const [nama, setNama] = useState("");
  const [selectedOlahraga, setSelectedOlahraga] = useState("Basket");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // const pin = e.target.value;
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const response = await Axios.post("/authentication/register", {
        merchant_name: nama,
        email,
        password,
        // pin,
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ background: "#000000" }}>
      <Navbarbefore />
      <div className="container mx-auto">
        <p
          className="fw-bold text-center mt-4 mb-4"
          style={{ color: "#C4F601", fontSize: 40 }}
        >
          Ayo Menjadi Bagian dari Kami
        </p>
        <div
          className="container w-md-50 rounded-3 mx-auto mb-3"
          style={{ background: "#161616" }}
        >
          <Form
            className="ms-5 mt-2 mx-auto text-start me-5 mb-5"
            onSubmit={handleRegister}
          >
            <h3 className="text-center text-light pt-5">
              Daftarkan Fasilitas Kamu
              <p className="text-muted fs-6">
                Isi data sesuai dengan informasi <br /> fasilitas yang kamu
                miliki
              </p>
            </h3>
            <div>
              <div class="form-group mb-3 mt-3">
                <label
                  className="text-light "
                  style={{ fontSize: 24, fontweight: "700" }}
                >
                  Nama Merchant
                </label>
                <Input
                  name="nama_depan"
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  // validations={[required, vfield]}
                  className="text-light form-control"
                  style={{
                    maxWidth: "515px",
                    height: "56px",
                    borderRadius: 16,
                    backgroundColor: "#7c7c7c",
                    border: "1px solid #7c7c7c",
                    fontSize: 20,
                    color: "#ffffff",
                    paddingLeft: 5,
                  }}
                ></Input>
              </div>
              <div class="form-group mb-3">
                <label
                  className="text-light "
                  style={{ fontSize: 24, fontweight: "700" }}
                >
                  Jenis Olahraga
                </label>
              </div>
              <select
                value={selectedOlahraga}
                onChange={(e) => setSelectedOlahraga(e.target.value)}
                style={{
                  maxWidth: "515px",
                  height: "56px",
                  borderRadius: 16,
                  backgroundColor: "#7c7c7c",
                  border: "1px solid #7c7c7c",
                  fontWeight: "700",
                  fontSize: 20,
                  color: "#ffffff",
                  paddingLeft: 5,
                  fontSize: 20,
                  color: "#ffffff",
                  paddingLeft: 5,
                }}
              >
                <option value="Basket">Basket</option>
                <option value="Futsal">Futsal</option>
                <option value="Badminton">Badminton</option>
                <option value="Yoga">Yoga</option>
                <option value="Fitness">Fitness</option>
              </select>
              <div class="form-group mb-3">
                <label
                  className="text-light "
                  style={{ fontSize: 24, fontweight: "700" }}
                >
                  Alamat Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-light form-control"
                  placeholder="Masukkan Email"
                  // validations={[required, email, vfield]}
                  style={{
                    maxWidth: "515px",
                    height: "56px",
                    borderRadius: 16,
                    backgroundColor: "#7c7c7c",
                    border: "1px solid #7c7c7c",
                    fontSize: 20,
                    color: "#ffffff",
                    paddingLeft: 5,
                  }}
                ></Input>
              </div>
              <div class="form-group mb-3">
                <label
                  className="text-light "
                  style={{ fontSize: 24, fontweight: "700" }}
                >
                  Kata Sandi
                </label>
                <Input
                  name="password"
                  type="password"
                  value={password}
                  className="text-light form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  // validations={[required, vfield]}
                  placeholder="Masukkan Password"
                  style={{
                    maxWidth: "515px",
                    height: "56px",
                    borderRadius: 16,
                    backgroundColor: "#7c7c7c",
                    border: "1px solid #7c7c7c",
                    fontSize: 20,
                    color: "#ffffff",
                    paddingLeft: 5,
                  }}
                ></Input>
              </div>
              <div class="form-group mb-3">
                <label
                  className="text-light "
                  style={{ fontSize: 24, fontweight: "700" }}
                >
                  PIN (untuk pemulihan sandi)
                </label>
                <Input
                  name="pin"
                  type="number"
                  min="0"
                  value={pin}
                  className="text-light form-control"
                  onChange={(e) => setPin(e.target.value)}
                  // validations={[required, vpin]}
                  placeholder="Masukkan Pin untuk dipakai dalam memulihkan password"
                  style={{
                    maxWidth: "515px",
                    height: "56px",
                    borderRadius: 16,
                    border: "1px solid #7c7c7c",
                    backgroundColor: "#7c7c7c",
                    fontSize: 20,
                    color: "#ffffff",
                    paddingLeft: 5,
                  }}
                ></Input>
              </div>
              <div class="mb-3 text-light text-center">
                Dengan mengklik daftar, Anda telah <br /> membaca dan paham akan{" "}
                <span> </span>
                <a
                  href="/Syarat"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#C4f601" }}
                >
                  Syarat & Ketentuan <span> </span>
                </a>
                dari Helofit
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  style={{
                    maxWidth: "515px",
                    height: "56px",
                    borderRadius: 16,
                    background: "#C4f601",
                    fontSize: 24,
                  }}
                  className="btn w-100 text-dark fw-bold"
                >
                  Daftar
                </button>
                <p className="text-light mt-2">
                  Sudah memiliki akun? <span> </span>
                  <a
                    href="/login"
                    className="text-decoration-none fw-bold"
                    style={{ color: "#C4f601" }}
                  >
                    Masuk di sini
                  </a>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
