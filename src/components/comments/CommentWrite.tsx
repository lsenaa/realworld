import { useState } from "react";
import { usePostComment } from "../../hooks/mutations/useMutationComment";
import { useGetUser } from "../../hooks/queries/useQueryUser";

interface ICommentWriteProps {
  slug: string;
}

const CommentWrite = ({ slug }: ICommentWriteProps) => {
  const { userData } = useGetUser();
  const [comment, setComment] = useState("");
  const postComment = usePostComment();

  const onSubmitComment = () => {
    postComment.mutate(
      { body: comment, slug },
      {
        onSuccess: () => {
          setComment("");
          console.log("댓글 추가 성공!");
        },
      }
    );
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
