import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  DeleteArticle,
  getArticles,
  getArticlesSlug,
  getFeed,
  postArticle,
  putArticle,
} from "../../apis/articles/articles";

export const useArticlesQuery = () => {
  const queryClient = useQueryClient();

  const { data, isLoading: listIsLoading } = useQuery(["articles"], () =>
    getArticles()
  );

  const { data: feedData, isLoading: feedIsLoading } = useQuery(["feed"], () =>
    getFeed()
  );

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
    data,
    feedData,
    listIsLoading,
    feedIsLoading,
    postArticleMutation,
    putArticleMutation,
    deleteArticleMutation,
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
