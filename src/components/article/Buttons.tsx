import { useArticlesQuery } from "../../hooks/queries/useQueryArticles";
import { useFavoriteQuery } from "../../hooks/queries/useQueryFavorites";
import { useUserQuery } from "../../hooks/queries/useQueryUser";

interface IButtons {
  favorited: boolean;
  author: string;
  favoritesCount: number;
  slug: string;
}

const Buttons = ({ favorited, author, favoritesCount, slug }: IButtons) => {
  const { userData } = useUserQuery();
  const { postFavoriteMutation, deleteFavoriteMutation } = useFavoriteQuery();
  const { deleteArticleMutation } = useArticlesQuery();

  const userName = String(userData?.data.user.username);

  const onToggleFavorite = () => {
    if (favorited) {
      deleteFavoriteMutation(slug);
    } else {
      postFavoriteMutation(slug);
    }
  };

  const onDeleteArticle = () => {
    deleteArticleMutation(slug);
  };

  return (
    <>
      {userName === author ? (
        <>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-edit"></i>
            &nbsp; Edit Article
          </button>
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
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {author} <span className="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button
            className={`btn btn-sm ${
              favorited ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={onToggleFavorite}
          >
            <i className="ion-heart"></i>
            &nbsp; {favorited ? "UnFavorite" : "Favorite"}Article{" "}
            <span className="counter">({favoritesCount})</span>
          </button>
        </>
      )}
    </>
  );
};

export default Buttons;
