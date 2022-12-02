import axios from "axios";
import { toast } from "react-toastify";
class Api {
  async fetchSurahApi() {
    try {
      const result = await axios.get("http://api.alquran.cloud/v1/surah");
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSurahByName(id) {
    try {
      const result = await axios.get(`http://api.alquran.cloud/v1/surah/${id}`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchTaqvimNamaz(body) {
    try {
      const result = await axios.get(
        `https://islomapi.uz/api/present/day?region=${body}`
      );
      return result.data;
    } catch (error) {
      toast.info("notugri bosildi");
    }
  }
}
export const api = new Api();
