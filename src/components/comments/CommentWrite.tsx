import React, { useState } from "react";
import { usePostComment } from "../../hooks/mutations/useMutationComment";
import { useGetUser } from "../../hooks/queries/useQueryUser";
import { useQueryClient } from "@tanstack/react-query";

interface ICommentWriteProps {
  slug: string;
}

const CommentWrite = ({ slug }: ICommentWriteProps) => {
  const { userData } = useGetUser();
  const [comment, setComment] = useState("");
  const postComment = usePostComment();
  const queryClient = useQueryClient();

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postComment.mutate(
      { body: comment, slug },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["comments"]);
        },
      }
    );
    setComment("");
  };

  return (
    <form className="card comment-form" onSubmit={onSubmitComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          rows={3}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={userData?.data.user.image}
          className="comment-author-img"
          alt="profile"
        />
        <button type="submit" className="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentWrite;
