import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser, postLogin, putUser } from "../../apis/users/users";

export const useUserQuery = () => {
  const queryClient = useQueryClient();

  const { data: userData, isLoading: userIsLoading } = useQuery(["user"], () =>
    getUser()
  );

  const { mutate: putUserMutation } = useMutation(putUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  return { userData, userIsLoading, putUserMutation };
};

export const usePostLoginMutation = () => useMutation(postLogin);
