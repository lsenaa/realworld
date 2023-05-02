import { apiClient } from "../client";
import { IPostArticle, IPutArticle } from "./articlesType";

// ${selectTag ? `&tag=${selectTag}` : ""}
// ${favorited ? `&favorited=${favorited}` : ""}
// ${author ? `&author=${author}` : ""}`)

export const getArticles = async (tab: number, selectTag: string) => {
  try {
    const data = await apiClient.get(
      `/articles${tab === 1 ? "" : ""}${tab === 0 ? "/feed" : ""}?limit=20
      ${tab === 2 ? `&tag=${selectTag}` : ""}`
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getProfileArticles = async (
  isFavorite: boolean,
  username: string
) => {
  try {
    const data = await apiClient.get(
      `/articles?${isFavorite ? "favorited" : "author"}=${username}&`
    );
    return data;
  } catch (e) {
    console.log(e);
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
