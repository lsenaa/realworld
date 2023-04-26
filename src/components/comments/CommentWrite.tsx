import { useGetUser } from "../../hooks/queries/useQueryUser";

const CommentWrite = () => {
  const { userData } = useGetUser();

  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          rows={3}
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={userData?.data.user.image}
          className="comment-author-img"
          alt="profile"
        />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
};

export default CommentWrite;
