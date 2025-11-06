import axios from "axios";
import config from "../config/api-config.json";

const apiClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    "Content-Type": "application/json",
    //"x-api-key": config.api.apiKey,
    //Authorization: `Bearer ${config.api.bearerToken}`,
  },
});

export default apiClient;
