import { Link } from "react-router-dom";
import { useFavoriteQuery } from "../../hooks/queries/useQueryFavorites";
import { convertDate } from "../../libs/date";

export interface IArticle {
  author: {
    username: string;
    image: string;
    following: boolean;
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
}

interface IArticlePreviewProps {
  data: any;
  loading: boolean;
}

const ArticlePreview = ({ data, loading }: IArticlePreviewProps) => {
  const { postFavoriteMutation, deleteFavoriteMutation } = useFavoriteQuery();

  const onToggleFavorite = (slug: string) => {
    data.filter((article: IArticle) => {
      if (article?.slug === slug) {
        if (article?.favorited) {
          deleteFavoriteMutation(article?.slug);
        } else {
          postFavoriteMutation(article?.slug);
        }
      }
    });
  };

  return (
    <>
      {loading ? (
        <p style={{ marginTop: "10px" }}>Loading...</p>
      ) : (
        <>
          {data?.length === 0 && (
            <p style={{ marginTop: "10px" }}>No articles are here... yet.</p>
          )}

          {data?.map((article: IArticle) => (
            <div className="article-preview" key={article.slug}>
              <div className="article-meta">
                <Link to={`/profile/${article.author.username}`}>
                  <img src={article.author.image} alt="author" />
                </Link>
                <div className="info">
                  <Link
                    to={`/profile/${article.author.username}`}
                    className="author"
                  >
                    {article.author.username}
                  </Link>
                  <span className="date">
                    {convertDate(
                      article.updatedAt ? article.updatedAt : article.createdAt
                    )}
                  </span>
                </div>
                <button
                  className={`btn btn-sm pull-xs-right ${
                    article?.favorited ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => onToggleFavorite(article?.slug)}
                >
                  <i className="ion-heart"></i> {article.favoritesCount}
                </button>
              </div>
              <Link
                to={`/article/${article.slug}`}
                state={{ slug: article.slug }}
                className="preview-link"
              >
                <h1>{article.slug.split("-").join(" ").slice(0, -7)}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  {article.tagList.map((tag: string, index: number) => (
                    <li
                      className="tag-default tag-pill tag-outline ng-binding ng-scope"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ArticlePreview;
