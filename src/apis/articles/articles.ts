import { apiClient } from "../client";
import { IPostArticle, IPutArticle } from "./articlesType";

export const getArticles = async () => {
  try {
    const data = await apiClient.get(`/articles`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getMyArticles = async (author: string) => {
  try {
    const data = await apiClient.get(`/articles${`?author=${author}&`}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getFeed = async () => {
  try {
    const data = await apiClient.get(`/articles/feed`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getArticlesSlug = async (slug: string) => {
  try {
    const data = await apiClient.get(`/articles/${slug}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const postArticle = async ({
  title,
  description,
  body,
  tagList,
}: IPostArticle) => {
  try {
    const { data } = await apiClient.post(`/articles`, {
      article: { title, description, body, tagList },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const putArticle = async ({
  slug,
  title,
  description,
  body,
  tagList,
}: IPutArticle) => {
  try {
    const { data } = await apiClient.put(`/articles/${slug}`, {
      article: { title, description, body, tagList },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const DeleteArticle = async (slug: string) => {
  try {
    const { data } = await apiClient.delete(`/articles/${slug}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
