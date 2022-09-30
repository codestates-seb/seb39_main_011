import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.209.21.235:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
