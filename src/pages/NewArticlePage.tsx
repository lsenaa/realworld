import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postArticle } from "../apis/articles/articles";

export interface IFormArticleData {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

const NewArticlePage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<IFormArticleData>({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });

  const [error, setError] = useState({
    title: "",
    description: "",
    body: "",
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

  const onSubmitArticle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postArticle(values)
      .then((res) => {
        navigate(`/article/${res.article.slug}`);
      })
      .catch((err) => {
        setError({
          title: err.response.data.errors.email,
          description: err.response.data.errors.description,
          body: err.response.data.errors.body,
        });
      });
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {error.title && <li>title {error.title}</li>}
              {error.description && <li>description {error.description}</li>}
              {error.body && <li>body {error.body}</li>}
            </ul>

            <form onSubmit={onSubmitArticle}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
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
                  <div className="tag-list"></div>
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

export default NewArticlePage;
