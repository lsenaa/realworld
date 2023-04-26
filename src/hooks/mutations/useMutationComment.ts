import { useMutation } from "@tanstack/react-query";
import { deleteComment, postComment } from "../../apis/comments/comments";

export const usePostComment = () => useMutation(postComment);

export const useDeleteComment = () => useMutation(deleteComment);
