import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getArticles,
  getArticlesSlug,
  getFeed,
} from "../../apis/articles/articles";

export const useArticlesQuery = () => {
  const queryClient = useQueryClient();

  const { data, isLoading: listIsLoading } = useQuery(["articles"], () =>
    getArticles()
  );

  const { data: feedData, isLoading: feedIsLoading } = useQuery(["feed"], () =>
    getFeed()
  );

  return {
    data,
    feedData,
    listIsLoading,
    feedIsLoading,
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
