import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { putUser } from "../apis/users/users";
import { UserContext } from "../contexts/UserContext";
import { useUserQuery } from "../hooks/queries/useQueryUser";

interface IFormProfileData {
  image: string;
  username: string;
  bio: string;
  email: string;
  password: string;
}

const SettingPage = () => {
  const navigate = useNavigate();

  const { userData, putUserMutation } = useUserQuery();

  const [values, setValues] = useState<IFormProfileData>({
    image: userData?.data.user.image,
    username: userData?.data.user.username,
    bio: userData?.data.user.bio,
    email: userData?.data.user.email,
    password: "",
  });

  const [error, setError] = useState({
    image: "",
    username: "",
    bio: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(values);

  const onSubmitSetting = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    putUserMutation(values);
    navigate(`/profile/${userData?.data.user.username}`);

    // putUser(values)
    // .then((res) => {
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     setError({
    //       image: err.response.data.errors.image,
    //       username: err.response.data.errors.username,
    //       bio: err.response.data.errors.bio,
    //       email: err.response.data.errors.email,
    //       password: err.response.data.errors.password,
    //     });
    //   });
  };

  const { setIsLogin } = useContext(UserContext);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    // setIsLogin("");
    setIsLogin(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <ul className="error-messages">
              {error.image && <li>image {error.image}</li>}
              {error.email && <li>email {error.email}</li>}
              {error.bio && <li>bio {error.bio}</li>}
              {error.username && <li>username {error.username}</li>}
              {error.password && <li>password {error.password}</li>}
            </ul>

            <form onSubmit={onSubmitSetting}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="image"
                    value={values.image}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    name="bio"
                    value={values.bio}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="New Password"
                    name="username"
                    value={values.password}
                    onChange={handleChange}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onClickLogout}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
