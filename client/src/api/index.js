import axios from "axios";

const API = axios.create({
  baseURL: "https://mentorconnect-backend-o5mm.onrender.com/api",
  withCredentials: true,
});

export default API;
