import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavorites, postFavorites } from "../../apis/favorites";

export const useCommentQuery = (slug: string) => {
  const queryClient = useQueryClient();

  const { mutate: postFavoriteMutation } = useMutation(postFavorites, {
    onSuccess: () => {
      queryClient.invalidateQueries(["favorite"]);
    },
  });

  const { mutate: deleteFavoriteMutation } = useMutation(deleteFavorites, {
    onSuccess: () => {
      queryClient.invalidateQueries(["favorite"]);
    },
  });

  return { postFavoriteMutation, deleteFavoriteMutation };
};
