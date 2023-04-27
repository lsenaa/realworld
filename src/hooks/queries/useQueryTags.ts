import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../apis/tags";

export const useTagQuery = () => {
  const { data: tagData, isLoading: tagIsLoading } = useQuery(["tags"], () =>
    getTags()
  );

  return { tagData, tagIsLoading };
};
