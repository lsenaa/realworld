import { apiClient } from "./client";

export const getTags = async () => {
  try {
    const data = await apiClient.get(`/tags`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
