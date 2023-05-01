import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavorites, postFavorites } from "../../apis/favorites";

export const useFavoriteQuery = () => {
  const queryClient = useQueryClient();

  const { mutate: postFavoriteMutation } = useMutation(postFavorites, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  const { mutate: deleteFavoriteMutation } = useMutation(deleteFavorites, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  return { postFavoriteMutation, deleteFavoriteMutation };
};
