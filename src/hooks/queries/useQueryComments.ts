import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteComment,
  getComments,
  postComment,
} from "../../apis/comments/comments";

// export const useGetComments = (slug: string) => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["comments", slug],
//     queryFn: () => getComments(slug),
//     staleTime: 20000,
//   });

//   return { data, isLoading };
// };

export const useCommentQuery = (slug: string) => {
  const queryClient = useQueryClient();

  const { data: commentData, isLoading } = useQuery(["comments"], () =>
    getComments(slug)
  );

  const { mutate: postCommentMutation } = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });

  const { mutate: deleteCommentMutation } = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });

  return { commentData, isLoading, postCommentMutation, deleteCommentMutation };
};
