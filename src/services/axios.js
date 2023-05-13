import axios from "axios";

const baseURL = "http://192.168.43.121:3002/api/v1/admin";
// const baseURL = "http://localhost:3002/api/v1/admin";

const timeout = 16000;

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

export default instance;
