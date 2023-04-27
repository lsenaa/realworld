import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../apis/users/users";

export const useUserQuery = () => {
  const { data: userData, isLoading: userIsLoading } = useQuery(["user"], () =>
    getUser()
  );

  return { userData, userIsLoading };
};
