import axios from "axios";
import sessionHandler from "../utils/handlers/session.handler";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(async (config: any) => {
  const token = sessionHandler.getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
