import { Link, useParams } from "react-router-dom";
import ArticlePreview from "../components/article/ArticlePreview";
import { useMyArticleQuery } from "../hooks/queries/useQueryArticles";

const ProfilePage = () => {
  const params = useParams();
  const username = String(params.username);
  const { myArticleData } = useMyArticleQuery(username);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="user-img" />
              <h4>Eric Simons</h4>
              <p>
                Cofounder @GoThinkster, lived in Aol's HQ for a few months,
                kinda looks like Peeta from the Hunger Games
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
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
                  <Link to="" className="nav-link active">
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>
            <ArticlePreview data={myArticleData?.data.articles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
