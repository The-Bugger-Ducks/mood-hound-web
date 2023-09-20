import axios from "axios";
import sessionHandler from "../utils/handlers/session.handler";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(async (config: any) => {
  const token =
    sessionHandler.getAuthToken() ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidXNlcklkIjoiY2NmZGY0ZGQtNDI3ZC00Zjg2LWFlOTktNDFiNzdiZTY3YjkxIiwicm9sZSI6IkFETUlOIn0sImlhdCI6MTY5NTA4MTQ0MCwiZXhwIjoxNjk1Njg2MjQwfQ.ifINmWCbJ3a37eUPtH7HfDpds_k9gq-mNXHhAE-7ANo";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
