import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useArticlesQuery } from "../hooks/queries/useQueryArticles";
import { IFormArticleData } from "./NewArticlePage";

const EditArticlePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const slug = String(location.state.article.slug);
  const { putArticleMutation } = useArticlesQuery();

  const [values, setValues] = useState<IFormArticleData>({
    title: location.state.article.title,
    description: location.state.article.description,
    body: location.state.article.body,
    tag: "",
    tagList: location.state.article.tagList,
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

  const addTag = (newTag: string) => {
    setValues({
      ...values,
      tag: "",
      tagList: [...values.tagList, newTag],
    });
  };

  const removeTag = (target: string) => {
    setValues({
      ...values,
      tagList: values.tagList.filter((tag: string) => tag !== target),
    });
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!values.tagList.includes(values.tag)) {
        addTag(values.tag);
      }
    }
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
                    name="tag"
                    value={values.tag}
                    onChange={handleChange}
                    onKeyDown={onEnter}
                  />
                  <div className="tag-list">
                    {values.tagList.map((tag: string) => (
                      <span
                        key={tag}
                        className="tag-default tag-pill ng-binding ng-scope"
                      >
                        <i
                          role="presentation"
                          className="ion-close-round"
                          style={{ cursor: "pointer", marginRight: "5px" }}
                          onClick={() => removeTag(tag)}
                        ></i>
                        {tag}
                      </span>
                    ))}
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
