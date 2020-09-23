import axios from "axios";

const api = axios.create({
  baseURL: "https://laerte-backend.herokuapp.com"
});

export default api;
