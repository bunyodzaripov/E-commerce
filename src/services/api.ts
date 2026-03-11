import axios from "axios";
import { tokenStorage } from "@lib/token";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Interceptor da hook ishlamaydi
// Shuning uchun bu yerda tokenStorage ishlatamiz
api.interceptors.request.use(
  (config) => {
    const token = tokenStorage.get();

    if (token && tokenStorage.isValid()) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenStorage.remove();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
