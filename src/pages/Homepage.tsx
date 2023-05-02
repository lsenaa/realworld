import { useGetArticlesQuery } from "../hooks/queries/useQueryArticles";
import { Link } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import { useTagQuery } from "../hooks/queries/useQueryTags";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const HomePage = () => {
  const { isLogin } = useContext(UserContext);
  const [isGlobal, setIsGlobal] = useState(true);
  const [selectTag, setSelectTag] = useState("");
  const [tab, setTab] = useState(1);
  const { data, isLoading } = useGetArticlesQuery(tab, selectTag);
  const { tagData, tagIsLoading } = useTagQuery();

  // console.log(data?.data.articlesCount);
  console.log(data);

  const onClickTag = (tag: string) => {
    setSelectTag(tag);
    setIsGlobal(false);
    setTab(2);
  };

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
                      className={`nav-link ${tab === 0 ? "active" : ""}`}
                      onClick={() => {
                        setIsGlobal(false);
                        setTab(0);
                      }}
                    >
                      Your Feed
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${tab === 1 ? "active" : ""}`}
                    onClick={() => {
                      setIsGlobal(true);
                      setTab(1);
                    }}
                  >
                    Global Feed
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${tab === 2 ? "active" : ""}`}
                    onClick={() => setTab(2)}
                  >
                    {selectTag}
                  </Link>
                </li>
              </ul>
            </div>

            <ArticlePreview data={data?.data.articles} loading={isLoading} />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {tagIsLoading && (
                  <p style={{ marginTop: "10px" }}>Loading...</p>
                )}

                {tagData?.data.tags.map((tag: string) => (
                  <Link
                    to="/"
                    className="tag-pill tag-default"
                    key={tag}
                    onClick={() => onClickTag(tag)}
                  >
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
