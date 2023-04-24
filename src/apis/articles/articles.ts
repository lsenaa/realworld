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

export const postArticle = async ({
  title,
  description,
  body,
  tagList,
}: IPostArticle) => {
  return await apiClient({
    method: "post",
    url: `/articles`,
    data: {
      article: {
        title,
        description,
        body,
        tagList,
      },
    },
  });
};

export const getArticlesSlug = async (slug: string) => {
  return await apiClient({
    method: "get",
    url: `/articles/${slug}`,
  });
};

export const putArticle = async ({
  slug,
  title,
  description,
  body,
  tagList,
}: IPutArticle) => {
  return await apiClient({
    method: "put",
    url: `/articles/${slug}`,
    data: {
      article: {
        title,
        description,
        body,
        tagList,
      },
    },
  });
};

export const DeleteArticle = async (slug: string) => {
  return await apiClient({
    method: "delete",
    url: `/articles/${slug}`,
  });
};
