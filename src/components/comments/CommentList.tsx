import { Link } from "react-router-dom";
import { IComment } from "../../pages/ArticlePage";

const CommentList = ({ comment }: IComment) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to="" className="comment-author">
          <img
            src={comment.author.image}
            className="comment-author-img"
            alt="profile"
          />
        </Link>
        &nbsp;
        <Link to="" className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">{comment.updatedAt}</span>
      </div>
    </div>
  );
};

export default CommentList;
