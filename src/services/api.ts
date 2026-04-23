import axios from "axios";
import { tokenStorage } from "@/lib/token";
import { auth } from "./auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

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

let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 va retry qilinmagan bo'lsa
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Bir vaqtda bir marta refresh bo'lsin
      if (isRefreshing) return Promise.reject(error);
      isRefreshing = true;

      try {
        const refreshToken = tokenStorage.getRefresh();
        if (!refreshToken) throw new Error("No refresh token");

        const data = await auth.refresh(refreshToken);

        // Yangi tokenlarni saqlash
        tokenStorage.set(data.accessToken, data.refreshToken);

        // Avvalgi so'rovni yangi token bilan qayta yuborish
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch {
        // Refresh ham ishlamasa — logout
        tokenStorage.remove();
        window.location.href = "/login";
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
