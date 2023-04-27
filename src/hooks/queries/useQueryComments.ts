import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteComment,
  getComments,
  postComment,
} from "../../apis/comments/comments";

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
