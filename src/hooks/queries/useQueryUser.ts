import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../apis/users/users";

export const useGetUser = () => {
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 20000,
  });

  return { userData };
};

export const useUserQuery = () => {
  const { data: userData, isLoading: userIsLoading } = useQuery(["user"], () =>
    getUser()
  );

  return { userData, userIsLoading };
};
