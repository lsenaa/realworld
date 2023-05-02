import { Link, useNavigate } from "react-router-dom";
import { useArticlesQuery } from "../../hooks/queries/useQueryArticles";
import { useFavoriteQuery } from "../../hooks/queries/useQueryFavorites";
import { useProfileQuery } from "../../hooks/queries/useQueryProfile";
import { useUserQuery } from "../../hooks/queries/useQueryUser";
import { useIsLogin } from "../../hooks/useIsLogin";

interface IButtonProps {
  article: {
    author: {
      username: string;
      image: string;
      following?: boolean;
    };
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt: string;
  };
}

const Buttons = (article: IButtonProps) => {
  const navigate = useNavigate();
  const { isLogin } = useIsLogin();
  // const { userData } = useUserQuery();
  const { postFavoriteMutation, deleteFavoriteMutation } = useFavoriteQuery();
  const { deleteArticleMutation } = useArticlesQuery();
  const { postFollowMutation, deleteFollowMutation } = useProfileQuery(
    article?.article?.author.username
  );

  // const userName = String(userData?.data.user.username);
  const following = article?.article?.author.following;

  const onToggleFavorite = () => {
    if (article.article.favorited) {
      deleteFavoriteMutation(article.article.slug);
    } else {
      postFavoriteMutation(article.article.slug);
    }
  };

  const onDeleteArticle = () => {
    deleteArticleMutation(article.article.slug);
    navigate(`/profile/${article.article.author.username}`);
  };

  const onToggleFollowing = () => {
    if (following) {
      deleteFollowMutation(article?.article?.author.username);
    } else {
      postFollowMutation(article?.article?.author.username);
    }
  };

  return (
    <>
      {isLogin ? (
        <>
          <Link
            to={`/editor/${article?.article?.slug}`}
            state={{ article: article?.article }}
          >
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-edit"></i>
              &nbsp; Edit Article
            </button>
          </Link>
          &nbsp;&nbsp;
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleteArticle}
          >
            <i className="ion-trash-a"></i>
            &nbsp; Delete Article
          </button>
        </>
      ) : (
        <>
          <button
            className={`btn btn-sm ${
              following
                ? `action-btn ng-binding btn-secondary`
                : `btn-outline-secondary`
            }`}
            onClick={onToggleFollowing}
          >
            <i className="ion-plus-round"></i>
            &nbsp; {following ? "UnFollow" : "Follow"}{" "}
            {article?.article?.author.username}{" "}
          </button>
          &nbsp;&nbsp;
          <button
            className={`btn btn-sm ${
              article?.article?.favorited
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={onToggleFavorite}
          >
            <i className="ion-heart"></i>
            &nbsp; {article?.article?.favorited ? "UnFavorite" : "Favorite"}
            Article{" "}
            <span className="counter">
              ({article?.article?.favoritesCount})
            </span>
          </button>
        </>
      )}
    </>
  );
};

export default Buttons;
