import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import {
  useFavoriteArticleQuery,
  useMyArticleQuery,
} from "../hooks/queries/useQueryArticles";
import { useProfileQuery } from "../hooks/queries/useQueryProfile";

const ProfilePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const username = String(params.username);
  const { profileData } = useProfileQuery(username);
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
                src={profileData?.data.profile.image}
                className="user-img"
                alt="profile"
              />
              <h4>{profileData?.data.profile.username}</h4>
              <p>{profileData?.data.profile.bio}</p>
              <button
                className="btn btn-sm btn-outline-secondary action-btn"
                onClick={async () => navigate(`/settings`)}
              >
                <i
                  className={
                    username === profileData?.data.profile.username
                      ? "ion-gear-a"
                      : "ion-plus-round"
                  }
                ></i>
                &nbsp;
                {username === profileData?.data.profile.username
                  ? " Edit Profile Settings"
                  : `Follow ${profileData?.data.profile.username}`}
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
                    to={`/profile/${profileData?.data.profile.username}`}
                    className={`nav-link ${isFavorite ? "" : "active"}`}
                    onClick={() => setisFavorite(false)}
                  >
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/profile/${profileData?.data.profile.username}`}
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
