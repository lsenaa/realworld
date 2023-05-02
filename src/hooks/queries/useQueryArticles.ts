import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  DeleteArticle,
  getArticles,
  getArticlesSlug,
  getProfileArticles,
  postArticle,
  putArticle,
} from "../../apis/articles/articles";

export const useArticlesQuery = () => {
  const queryClient = useQueryClient();

  const { mutate: postArticleMutation } = useMutation(postArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  const { mutate: putArticleMutation } = useMutation(putArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  const { mutate: deleteArticleMutation } = useMutation(DeleteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  return {
    postArticleMutation,
    putArticleMutation,
    deleteArticleMutation,
  };
};

export const useGetArticlesQuery = (tab: number, selectTag: string) => {
  const { data, isLoading } = useQuery(["articles", tab, selectTag], () =>
    getArticles(tab, selectTag)
  );

  return {
    data,
    isLoading,
  };
};

export const useArticleQuery = (slug: string) => {
  const { data: articleData, isLoading: articleIsLoading } = useQuery(
    ["articles", slug],
    () => getArticlesSlug(slug)
  );

  return {
    articleData,
    articleIsLoading,
  };
};

export const useProfileArticlesQuery = (
  isFavorite: boolean,
  username: string
) => {
  const { data, isLoading } = useQuery(["articles", isFavorite, username], () =>
    getProfileArticles(isFavorite, username)
  );

  return { data, isLoading };
};
