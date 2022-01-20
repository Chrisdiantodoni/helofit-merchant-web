import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  loginadmin(email, password) {
    return axios
      .post(API_URL + "adminsignin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("admin", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  Keluar() {
    localStorage.removeItem("user");
  }

  KeluarAdmin() {
    localStorage.removeItem("admin");
  }

  Pesan(nama, email, pesan) {
    return axios.post(API_URL + "feedback", {
      nama,
      email,
      pesan,
    });
  }

  Daftar(email, nama_dpn, nama_blkg, password) {
    return axios.post(API_URL + "signup", {
      email,
      nama_dpn,
      nama_blkg,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getCurrentAdmin() {
    return JSON.parse(localStorage.getItem("admin"));
  }
}

export default new AuthService();
