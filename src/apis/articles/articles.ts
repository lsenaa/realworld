import { apiClient } from "../client";
import { IPostArticle, IPutArticle } from "./articlesType";

export const getArticles = async () => {
  return await apiClient({
    method: "get",
    url: `/articles`,
  });
};

export const getFeed = async () => {
  return await apiClient({
    method: "get",
    url: `/articles/feed`,
  });
};

export const postArticle = async (data: { article: IPostArticle }) => {
  return await apiClient({
    method: "post",
    url: `/articles`,
    data,
  });
};

export const getArticlesSlug = async () => {
  return await apiClient({
    method: "get",
    url: `/articles/:slug`,
  });
};

export const putArticles = async (data: { article: IPutArticle }) => {
  return await apiClient({
    method: "put",
    url: "/articles/:slug",
    data,
  });
};

export const DeleteArticles = async () => {
  return await apiClient({
    method: "delete",
    url: "/articles/:slug",
  });
};
