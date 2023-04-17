import axios from "./axios";

class authentication {
  async login(body) {
    return await axios
      .post("/authentication/login", body)
      .then((res) => res.data);
  }
}

export default new authentication();
