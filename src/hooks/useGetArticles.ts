import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../apis/articles/articles";

export const useGetArticles = () => {
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
    staleTime: 20000,
  });

  return { data };
};
