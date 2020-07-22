import axios from "axios";

let host = "http://localhost:3030/";

const api  = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
});

export default api;