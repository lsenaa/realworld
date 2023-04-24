import { useGetArticles } from "../hooks/useGetArticles";
import { Link } from "react-router-dom";

interface IArticle {
  author: {
    username: string;
    image: string;
  };
  body: string;
  createdAt: string;
  description: string;
  favoritesCount: number;
  slug: string;
  tagList: [string];
  title: string;
  updatedAt: string;
}

const HomePage = () => {
  const { data, isLoading } = useGetArticles();

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link to="" className="nav-link disabled">
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link active">
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>

            {isLoading && <p style={{ marginTop: "10px" }}>Loading...</p>}

            {data?.data.articles.map((article: IArticle, index: number) => (
              <div className="article-preview" key={index}>
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
            ))}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
