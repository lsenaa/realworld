import { Link, useParams } from "react-router-dom";
import CommentList from "../components/comments/CommentList";
import CommentWrite from "../components/comments/CommentWrite";
import { useGetArticlesSlug } from "../hooks/queries/useQueryArticles";
import { useGetComments } from "../hooks/queries/useQueryComments";
import { IArticle } from "./Homepage";

export interface IComment {
  // comment: {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
  // };
}
const ArticlePage = () => {
  const params = useParams();
  const data = useGetArticlesSlug(String(params.slug));
  const article: IArticle = data.data?.data.article;
  const commentData = useGetComments(String(params.slug));
  const comments: IComment[] = commentData.data?.data.comments;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article?.title}</h1>

          <div className="article-meta">
            <Link to={`/profile/${article?.author.username}`}>
              <img src={article?.author.image} alt="profile" />
            </Link>
            <div className="info">
              <Link
                to={`/profile/${article?.author.username}`}
                className="author"
              >
                {article?.author.username}
              </Link>
              <span className="date">{article?.updatedAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article?.author.username}
              <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article{" "}
              <span className="counter">({article?.favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article?.body}</p>
            {article?.tagList.map((tag: string) => (
              <li key={tag} className="tag-default tag-pill tag-outline">
                {tag}
              </li>
            ))}
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link to={`/profile/${article?.author.username}`}>
              <img src={article?.author.image} alt="profile" />
            </Link>
            <div className="info">
              <Link
                to={`/profile/${article?.author.username}`}
                className="author"
              >
                {article?.author.username}
              </Link>
              <span className="date">{article?.updatedAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article?.author.username}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article{" "}
              <span className="counter">({article?.favoritesCount})</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentWrite slug={String(params.slug)} />
            {comments?.map((comment: IComment) => (
              <CommentList comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
