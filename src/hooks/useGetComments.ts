import { useQuery } from "@tanstack/react-query";
import { getComments } from "../apis/comments";

export const useGetComments = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["comments", slug],
    queryFn: () => getComments(slug),
    staleTime: 20000,
  });

  return { data, isLoading };
};
