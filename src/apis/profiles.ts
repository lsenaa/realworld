import { apiClient } from "./client";

export const getProfile = async (username: string) => {
  return await apiClient({
    method: "get",
    url: `/profiles/${username}`,
  });
};

export const postFollow = async (username: string) => {
  return await apiClient({
    method: "post",
    url: `/profiles/${username}/follow`,
  });
};

export const deleteFollow = async (username: string) => {
  return await apiClient({
    method: "delete",
    url: `/profiles/${username}/follow`,
  });
};
