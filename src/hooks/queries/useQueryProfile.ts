import { useQuery, useMutation } from "@tanstack/react-query";
import { deleteFollow, getProfile, postFollow } from "../../apis/profiles";

export const useProfileQuery = (username: string) => {
  const { data: profileData, isLoading: profileIsLoading } = useQuery(
    ["user"],
    () => getProfile(username)
  );

  const { mutate: postFollowMutation } = useMutation(postFollow, {});

  const { mutate: deleteFollowMutation } = useMutation(deleteFollow, {});

  return {
    profileData,
    profileIsLoading,
    postFollowMutation,
    deleteFollowMutation,
  };
};
