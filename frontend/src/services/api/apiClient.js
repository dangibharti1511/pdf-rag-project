import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(
      `[API Request] ${config.method?.toUpperCase()} ${config.url}`
    );
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API Error]", error);

    if (error.response) {
      return Promise.reject(error.response.data);
    }

    if (error.request) {
      return Promise.reject({
        detail: "Unable to connect to backend.",
      });
    }

    return Promise.reject({
      detail: "Unexpected error occurred.",
    });
  }
);

export default apiClient;