import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatapplication-1-io07.onrender.com" : "/api",
  withCredentials: true,
});
