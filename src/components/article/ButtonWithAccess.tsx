import { Link, useNavigate } from "react-router-dom";
import { useArticlesQuery } from "../../hooks/queries/useQueryArticles";
import { IArticle } from "./ArticlePreview";

interface IButtonWithAccessProps {
  article: IArticle;
}

const ButtonWithAccess = ({ article }: IButtonWithAccessProps) => {
  const navigate = useNavigate();
  const { deleteArticleMutation } = useArticlesQuery();

  const onDeleteArticle = () => {
    deleteArticleMutation(article?.slug);
    navigate(`/profile/${article?.author.username}`);
  };

  return (
    <>
      <Link to={`/editor/${article?.slug}`} state={{ article: article }}>
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
  );
};

export default ButtonWithAccess;
