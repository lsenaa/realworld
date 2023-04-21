import axios from "axios";
import { getToken } from "../libs/token";

const BASE_URL = "https://api.realworld.io/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const authAPI = {
  USER_VALIDATION: async () => {
    const response = await apiClient.get("/users/login");
    const jwtToken = getToken("accessToken");
  },
};
