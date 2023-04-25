import { Link } from "react-router-dom";

interface IArticle {
  article: {
    author: {
      username: string;
      image: string;
    };
    body?: string;
    createdAt: string;
    description: string;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt?: string;
  };
}

const ArticlePreview = ({ article }: IArticle) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        {/* <Link to={`/profile/${username}`}> */}
        <img src={article.author.image} alt="author" />
        {/* </Link> */}
        <div className="info">
          <Link to="" className="author">
            {article.author.username}
          </Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.slug.split("-").join(" ").slice(0, -7)}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag: string, index: number) => (
            <li
              className="tag-default tag-pill tag-outline ng-binding ng-scope"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
