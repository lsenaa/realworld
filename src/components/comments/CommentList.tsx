import React from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../../apis/comments/comments";
import { useCommentQuery } from "../../hooks/queries/useQueryComments";

const CommentList = ({ comment, slug }: any) => {
  const queryClient = useQueryClient();
  const { deleteCommentMutation } = useCommentQuery(slug);
  // const onClickDeleteComment = () => {
  //   deleteComment.mutate(
  //     { slug, id: comment.id },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries(["comments"]);
  //       },
  //     }
  //   );
  // };

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment?.body}</p>
      </div>
      <div className="card-footer">
        <Link to="" className="comment-author">
          <img
            src={comment?.author.image}
            className="comment-author-img"
            alt="profile"
          />
        </Link>
        &nbsp;
        <Link to="" className="comment-author">
          {comment?.author.username}
        </Link>
        <span className="date-posted">{comment?.updatedAt}</span>
        <span className="mod-options">
          <i className="ion-trash-a"></i>
        </span>
      </div>
    </div>
  );
};

export default CommentList;
