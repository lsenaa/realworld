import { apiClient } from "../client";
import { IDeleteComment, IPostComment } from "./commentsType";

export const getComments = async (slug: string) => {
  try {
    const data = await apiClient.get(`/articles/${slug}/comments`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const postComment = async ({ body, slug }: IPostComment) => {
  try {
    const { data } = await apiClient.post(`/articles/${slug}/comments`, {
      comment: { body },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteComment = async ({ slug, id }: IDeleteComment) => {
  try {
    const { data } = await apiClient.delete(`/articles/${slug}/comments/${id}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
