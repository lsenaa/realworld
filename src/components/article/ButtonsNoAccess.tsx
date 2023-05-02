import { useFavoriteQuery } from "../../hooks/queries/useQueryFavorites";
import { useProfileQuery } from "../../hooks/queries/useQueryProfile";
import { IArticle } from "./ArticlePreview";

interface IButtonNoAccessProps {
  article: IArticle;
}

const ButtonNoAccess = ({ article }: IButtonNoAccessProps) => {
  const { postFavoriteMutation, deleteFavoriteMutation } = useFavoriteQuery();
  const { postFollowMutation, deleteFollowMutation } = useProfileQuery(
    article?.author.username
  );

  const following = article?.author.following;

  const onToggleFavorite = () => {
    if (article.favorited) {
      deleteFavoriteMutation(article?.slug);
    } else {
      postFavoriteMutation(article?.slug);
    }
  };

  const onToggleFollowing = () => {
    if (following) {
      deleteFollowMutation(article?.author.username);
    } else {
      postFollowMutation(article?.author.username);
    }
  };

  return (
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
        &nbsp; {following ? "UnFollow" : "Follow"} {article?.author.username}{" "}
      </button>
      &nbsp;&nbsp;
      <button
        className={`btn btn-sm ${
          article?.favorited ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={onToggleFavorite}
      >
        <i className="ion-heart"></i>
        &nbsp; {article?.favorited ? "UnFavorite" : "Favorite"}
        Article <span className="counter">({article?.favoritesCount})</span>
      </button>
    </>
  );
};

export default ButtonNoAccess;
