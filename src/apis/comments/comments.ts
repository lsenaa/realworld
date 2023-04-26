import { apiClient } from "../client";
import { IDeleteComment, IPostComment } from "./commentsType";

export const getComments = async (slug: string) => {
  return await apiClient({
    method: "get",
    url: `/articles/${slug}/comments`,
  });
};

export const postComment = async ({ body, slug }: IPostComment) => {
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

export const deleteComment = async ({ slug, id }: IDeleteComment) => {
  return await apiClient({
    method: "delete",
    url: `/articles/${slug}/comments/${id}`,
  });
};
