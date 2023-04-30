import { Link } from "react-router-dom";
import { useArticlesQuery } from "../../hooks/queries/useQueryArticles";
import { useFavoriteQuery } from "../../hooks/queries/useQueryFavorites";
import { useUserQuery } from "../../hooks/queries/useQueryUser";
import { IArticle } from "./ArticlePreview";

interface IButtons {
  favorited: boolean;
  author: string;
  favoritesCount: number;
  slug: string;
}

const Buttons = (article: any) => {
  const { userData, userIsLoading } = useUserQuery();
  const { postFavoriteMutation, deleteFavoriteMutation } = useFavoriteQuery();
  const { deleteArticleMutation } = useArticlesQuery();

  const userName = String(userData?.data.user.username);

  const onToggleFavorite = () => {
    if (article.favorited) {
      deleteFavoriteMutation(article.slug);
    } else {
      postFavoriteMutation(article.slug);
    }
  };

  const onDeleteArticle = () => {
    deleteArticleMutation(article.slug);
  };

  return (
    <>
      <div>확인확인확인</div>
      <div>{userName}</div>
      {/* {userName === article.author.username ? (
        <>
          <Link to={`/editor/${article.slug}`} state={{ article }}>
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
            &nbsp; Follow {article.author.username}{" "}
            <span className="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button
            className={`btn btn-sm ${
              article.favorited ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={onToggleFavorite}
          >
            <i className="ion-heart"></i>
            &nbsp; {article.favorited ? "UnFavorite" : "Favorite"}Article{" "}
            <span className="counter">({article.favoritesCount})</span>
          </button>
        </>
      )} */}
    </>
    // <>
    //   {userName === author ? (
    //     <>
    //       <Link to={`/editor/${slug}`} state={{ slug }}>
    //         <button className="btn btn-sm btn-outline-secondary">
    //           <i className="ion-edit"></i>
    //           &nbsp; Edit Article
    //         </button>
    //       </Link>
    //       &nbsp;&nbsp;
    //       <button
    //         className="btn btn-outline-danger btn-sm"
    //         onClick={onDeleteArticle}
    //       >
    //         <i className="ion-trash-a"></i>
    //         &nbsp; Delete Article
    //       </button>
    //     </>
    //   ) : (
    //     <>
    //       <button className="btn btn-sm btn-outline-secondary">
    //         <i className="ion-plus-round"></i>
    //         &nbsp; Follow {author} <span className="counter">(10)</span>
    //       </button>
    //       &nbsp;&nbsp;
    //       <button
    //         className={`btn btn-sm ${
    //           favorited ? "btn-primary" : "btn-outline-primary"
    //         }`}
    //         onClick={onToggleFavorite}
    //       >
    //         <i className="ion-heart"></i>
    //         &nbsp; {favorited ? "UnFavorite" : "Favorite"}Article{" "}
    //         <span className="counter">({favoritesCount})</span>
    //       </button>
    //     </>
    //   )}
    // </>
  );
};

export default Buttons;
