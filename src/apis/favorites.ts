import { apiClient } from "./client";

export const postFavorites = async (slug: string) => {
  try {
    const data = await apiClient.post(`/articles/${slug}/favorite`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteFavorites = async (slug: string) => {
  try {
    const data = await apiClient.delete(`/articles/${slug}/favorite`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
