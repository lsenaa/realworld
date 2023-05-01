import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import {
  useFavoriteArticleQuery,
  useMyArticleQuery,
} from "../hooks/queries/useQueryArticles";
import { useUserQuery } from "../hooks/queries/useQueryUser";

const ProfilePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { userData } = useUserQuery();
  const username = String(params.username);
  const { myArticleData, myArticleIsLoading } = useMyArticleQuery(username);
  const { favoriteData, favoriteIsLoading } = useFavoriteArticleQuery(username);
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={userData?.data.user.image}
                className="user-img"
                alt="profile"
              />
              <h4>{userData?.data.user.username}</h4>
              <p>{userData?.data.user.bio}</p>
              <button
                className="btn btn-sm btn-outline-secondary action-btn"
                onClick={async () => navigate(`/settings`)}
              >
                <i
                  className={
                    username === userData?.data.user.username
                      ? "ion-gear-a"
                      : "ion-plus-round"
                  }
                ></i>
                &nbsp;
                {username === userData?.data.user.username
                  ? " Edit Profile Settings"
                  : `Follow ${userData?.data.user.username}`}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link
                    to={`/profile/${userData?.data.user.username}`}
                    className={`nav-link ${isFavorite ? "" : "active"}`}
                    onClick={() => setisFavorite(false)}
                  >
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/profile/${userData?.data.user.username}`}
                    className={`nav-link ${isFavorite ? "active" : ""}`}
                    onClick={() => setisFavorite(true)}
                  >
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>
            <ArticlePreview
              data={
                isFavorite
                  ? favoriteData?.data.articles
                  : myArticleData?.data.articles
              }
              loading={isFavorite ? favoriteIsLoading : myArticleIsLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
