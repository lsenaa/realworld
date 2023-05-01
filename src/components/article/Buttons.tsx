import { Link, useNavigate } from "react-router-dom";
import { useArticlesQuery } from "../../hooks/queries/useQueryArticles";
import { useFavoriteQuery } from "../../hooks/queries/useQueryFavorites";
import { useUserQuery } from "../../hooks/queries/useQueryUser";

interface IButtonProps {
  article: {
    author: {
      username: string;
      image: string;
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
  const { userData } = useUserQuery();
  const { postFavoriteMutation, deleteFavoriteMutation } = useFavoriteQuery();
  const { deleteArticleMutation } = useArticlesQuery();

  const userName = String(userData?.data.user.username);

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

  return (
    <>
      {userName === article?.article?.author.username ? (
        <>
          <Link
            to={`/editor/${article.article.slug}`}
            state={{ article: article.article }}
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
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {article?.article?.author.username}{" "}
            <span className="counter">(10)</span>
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
