import { apiClient } from "./client";

export const postFavorites = async (slug: string) => {
  return await apiClient({
    method: "post",
    url: `/articles/${slug}/favorite`,
  });
};

export const deleteFavorites = async (slug: string) => {
  return await apiClient({
    method: "get",
    url: `/articles/${slug}/favorite`,
  });
};
