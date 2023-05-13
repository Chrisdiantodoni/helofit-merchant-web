import Axios from "./axios";

class merchantService {
  async getDetailMerchant(merchantId) {
    return Axios.get(`/merchant/${merchantId}`)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
}

export default new merchantService();
