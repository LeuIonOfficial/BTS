import axios from "axios";

export const $api = axios.create({
  baseURL: import.meta.env.VITE_SECRET_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

$api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(
    "ccpx_access_token",
  )}`;
  return config;
});
