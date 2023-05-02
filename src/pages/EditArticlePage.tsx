import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IPutArticle } from "../apis/articles/articlesType";
import {
  useArticleQuery,
  useArticlesQuery,
} from "../hooks/queries/useQueryArticles";
import { IFormArticleData } from "./NewArticlePage";

const EditArticlePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state.article);
  const params = useParams();
  const slug = String(location.state.article.slug);
  // const slug = String(params.slug);
  // const { articleData } = useArticleQuery(slug);
  // console.log(articleData?.data.article);
  const { putArticleMutation } = useArticlesQuery();

  const [values, setValues] = useState<IFormArticleData>({
    title: location.state.article.title,
    description: location.state.article.description,
    body: location.state.article.body,
    tag: "",
    tagList: [],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitEditArticle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    putArticleMutation({ ...values, slug });
    navigate(`/article/${slug}`);
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={onSubmitEditArticle}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    name="body"
                    value={values.body}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    name="tagList"
                    value={values.tagList}
                    onChange={handleChange}
                  />
                  <div className="tag-list">
                    {location.state.article.tagList.map(
                      (tag: string, index: number) => (
                        <span
                          key={index}
                          className="tag-default tag-pill ng-binding ng-scope"
                        >
                          <i className="ion-close-round"></i>
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticlePage;
