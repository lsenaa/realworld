import { useEffect, useState } from "react";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://api.realworld.io/api/articles");
      console.log(response.data.articles);
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            {articles?.map((article, index) => (
              <div className="article-preview" key={index}>
                <div className="article-meta">
                  <a href="profile.html">
                    <img src={article.author.image} alt="author" />
                  </a>
                  <div className="info">
                    <a href="" className="author">
                      {article.author.username}
                    </a>
                    <span className="date">{article.createdAt}</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.favoritesCount}
                  </button>
                </div>
                <a href="" className="preview-link">
                  <h1>{article.slug.split("-").join(" ").slice(0, -7)}</h1>
                  <p>{article.description}</p>
                  <span>Read more...</span>
                  <ul className="tag-list">
                    {article.tagList.map((tag, index) => (
                      <li
                        className="tag-default tag-pill tag-outline ng-binding ng-scope"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </a>
              </div>
            ))}

            {/* <div className="article-preview">
              <div className="article-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a href="" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="" className="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>
          </div> */}
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
