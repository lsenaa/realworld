import { useQuery } from "@tanstack/react-query";
import { getArticles, getArticlesSlug } from "../apis/articles/articles";

export const useGetArticles = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
    staleTime: 20000,
  });

  return { data, isLoading };
};

export const useGetArticlesSlug = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles/:slug"],
    queryFn: getArticlesSlug,
    staleTime: 20000,
  });

  return { data, isLoading };
};
