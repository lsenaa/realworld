import { useQuery } from "@tanstack/react-query";
import { getTags } from "../apis/tags";

export const useGetTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTags(),
    staleTime: 20000,
  });

  return { data, isLoading };
};
