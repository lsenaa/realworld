import React, { useState } from "react";
import { useUserQuery } from "../../hooks/queries/useQueryUser";
import { useCommentQuery } from "../../hooks/queries/useQueryComments";

interface ICommentWriteProps {
  slug: string;
}

const CommentWrite = ({ slug }: ICommentWriteProps) => {
  const { userData } = useUserQuery();
  const [comment, setComment] = useState("");
  const { postCommentMutation } = useCommentQuery(slug);

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postCommentMutation({ body: comment, slug });
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
