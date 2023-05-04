import { useGetArticlesQuery } from "../hooks/queries/useQueryArticles";
import { Link } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import { useTagQuery } from "../hooks/queries/useQueryTags";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const { isLogin } = useContext(UserContext);
  const [selectTag, setSelectTag] = useState("");
  const [tab, setTab] = useState(1);
  const [page, setPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery(tab, selectTag, page);
  const { tagData, tagIsLoading } = useTagQuery();

  const onClickTag = (tag: string) => {
    setSelectTag(tag);
    setTab(2);
    setPage(1);
    setActivedPage(1);
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
                      onClick={() => setTab(0)}
                    >
                      Your Feed
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${tab === 1 ? "active" : ""}`}
                    onClick={() => setTab(1)}
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

            <Pagination
              count={data?.data.articlesCount}
              page={page}
              setPage={setPage}
              activedPage={activedPage}
              setActivedPage={setActivedPage}
              loading={isLoading}
            />
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
