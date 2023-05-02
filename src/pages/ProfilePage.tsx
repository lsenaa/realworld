import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import ProfileButton from "../components/profile/ProfileButton";
import { useProfileArticlesQuery } from "../hooks/queries/useQueryArticles";
import { useProfileQuery } from "../hooks/queries/useQueryProfile";

const ProfilePage = () => {
  const params = useParams();
  const username = String(params.username);
  const [isFavorite, setIsFavorite] = useState(true);
  const { profileData } = useProfileQuery(username);
  const { data, isLoading } = useProfileArticlesQuery(isFavorite, username);

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
              <ProfileButton username={username} />
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
                    onClick={() => setIsFavorite(false)}
                  >
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/profile/${profileData?.data.profile.username}`}
                    className={`nav-link ${isFavorite ? "active" : ""}`}
                    onClick={() => setIsFavorite(true)}
                  >
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>
            <ArticlePreview data={data?.data.articles} loading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
