import React from "react";
import { Link } from "react-router-dom";
import { useCommentQuery } from "../../hooks/queries/useQueryComments";

const CommentList = ({ comment, slug }: any) => {
  const { deleteCommentMutation } = useCommentQuery(slug);

  const onClickDeleteComment = () => {
    deleteCommentMutation({ slug, id: comment.id });
  };

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
        <span className="mod-options" onClick={onClickDeleteComment}>
          <i className="ion-trash-a"></i>
        </span>
      </div>
    </div>
  );
};

export default CommentList;
