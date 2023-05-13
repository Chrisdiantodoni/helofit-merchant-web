import Axios from "./axios";

class facilityService {
  async addFacility(body) {
    return Axios.post(`/facility`, body)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
}

export default new facilityService();
