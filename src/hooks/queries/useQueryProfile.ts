import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFollow, getProfile, postFollow } from "../../apis/profiles";

export const useProfileQuery = (username: string) => {
  const queryClient = useQueryClient();

  const { data: profileData, isLoading: profileIsLoading } = useQuery(
    ["user"],
    () => getProfile(username)
  );

  const { mutate: postFollowMutation } = useMutation(postFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  const { mutate: deleteFollowMutation } = useMutation(deleteFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  return {
    profileData,
    profileIsLoading,
    postFollowMutation,
    deleteFollowMutation,
  };
};
