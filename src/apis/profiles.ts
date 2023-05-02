import { apiClient } from "./client";

export const getProfile = async (username: string) => {
  try {
    const data = await apiClient.get(`/profiles/${username}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const postFollow = async (username: string) => {
  try {
    const data = await apiClient.post(`/profiles/${username}/follow`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteFollow = async (username: string) => {
  try {
    const data = await apiClient.delete(`/profiles/${username}/follow`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
