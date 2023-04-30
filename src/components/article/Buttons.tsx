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

  const onToggleFavorite = () => {
    if (favorited) {
      deleteFavoriteMutation(slug);
    } else {
      postFavoriteMutation(slug);
    }
  };

  return (
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
  );
};

export default Buttons;
