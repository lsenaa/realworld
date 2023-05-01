import axios from "axios";
import { getToken } from "../libs/token";

const BASE_URL = "https://api.realworld.io/api";

const jwtToken = getToken("accessToken");

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: !!jwtToken ? `Bearer ${jwtToken}` : "",
  },
});
