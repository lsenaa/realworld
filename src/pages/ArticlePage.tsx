import { Link, useParams } from "react-router-dom";
import { IArticle } from "../components/article/ArticlePreview";
import Buttons from "../components/article/Buttons";
import CommentList from "../components/comments/CommentList";
import CommentWrite from "../components/comments/CommentWrite";
import { useArticleQuery } from "../hooks/queries/useQueryArticles";
import { useCommentQuery } from "../hooks/queries/useQueryComments";
import { useIsLogin } from "../hooks/useIsLogin";
import { convertDate } from "../libs/date";

export interface IComment {
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
}
const ArticlePage = () => {
  const params = useParams();
  const { isLogin } = useIsLogin();
  const { articleData } = useArticleQuery(String(params.slug));
  const article: IArticle = articleData?.data.article;
  const { commentData } = useCommentQuery(String(params.slug));
  const comments: IComment[] = commentData?.data.comments;

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
              <span className="date">
                {convertDate(
                  article?.updatedAt ? article?.updatedAt : article?.createdAt
                )}
              </span>
            </div>
            <Buttons article={article} />
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
              <span className="date">
                {convertDate(
                  article?.updatedAt ? article?.updatedAt : article?.createdAt
                )}
              </span>
            </div>
            <Buttons article={article} />
          </div>
        </div>
        {isLogin && (
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <CommentWrite slug={String(params.slug)} />
              {comments?.map((comment: IComment) => (
                <CommentList
                  comment={comment}
                  slug={String(params.slug)}
                  key={comment.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
