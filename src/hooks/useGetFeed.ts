import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../apis/articles/articles";

export const useGetFeed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["feed"],
    queryFn: () => getFeed(),
    staleTime: 20000,
  });

  return { data, isLoading };
};
