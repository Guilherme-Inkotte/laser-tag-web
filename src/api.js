import axios from "axios";
import socketIOClient from 'socket.io-client';

let host = "http://localhost:3030/";

const api  = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
});

export const socket = socketIOClient(host);

export default api;