import { apiClient } from "./client";

export const getComments = async (slug: string) => {
  return await apiClient({
    method: "get",
    url: `/articles/${slug}/comments`,
  });
};

export const postComment = async (body: string, slug: string) => {
  return await apiClient({
    method: "post",
    url: `/articles/${slug}/comments`,
    data: {
      comment: {
        body,
      },
    },
  });
};

export const DeleteComment = async (slug: string, id: string) => {
  return await apiClient({
    method: "delete",
    url: `/articles/${slug}/comments/${id}`,
  });
};
