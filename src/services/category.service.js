import Axios from "./axios";

class categoryService {
  async getCategory() {
    return Axios.get(`/category`)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
}

export default new categoryService();
