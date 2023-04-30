import { useArticlesQuery } from "../hooks/queries/useQueryArticles";
import { Link } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import { useTagQuery } from "../hooks/queries/useQueryTags";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const HomePage = () => {
  const { isLogin } = useContext(UserContext);
  const { globalData, feedData, globalIsLoading, feedIsLoading } =
    useArticlesQuery();
  const { tagData, tagIsLoading } = useTagQuery();
  const [isGlobal, setIsGlobal] = useState(false);

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
                {isLogin && (
                  <li className="nav-item">
                    <Link
                      to="/"
                      className={`nav-link ${isGlobal ? "" : "active"}`}
                      onClick={() => setIsGlobal(false)}
                    >
                      Your Feed
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${isGlobal ? "active" : ""}`}
                    onClick={() => setIsGlobal(true)}
                  >
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>

            {feedIsLoading ? (
              <p style={{ marginTop: "10px" }}>Loading...</p>
            ) : (
              <ArticlePreview
                data={
                  isGlobal ? globalData?.data.articles : feedData?.data.articles
                }
                loading={isGlobal ? globalIsLoading : feedIsLoading}
              />
            )}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {tagIsLoading && (
                  <p style={{ marginTop: "10px" }}>Loading...</p>
                )}

                {tagData?.data.tags.map((tag: string, index: number) => (
                  <Link to="" className="tag-pill tag-default" key={index}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
