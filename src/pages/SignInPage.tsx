import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../apis/users/users";

interface IFormSigninData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<IFormSigninData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    emailOrPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLogin(values)
      .then((res) => {
        localStorage.setToken("accessToken", res.data.user.token);
        // setIsLogin(!!token.getToken("accessToken"));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setError({
          email: err.response.data.errors.email,
          password: err.response.data.errors.password,
          emailOrPassword: err.response.data.errors["email or password"],
        });
      });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Not registered?</Link>
            </p>

            <ul className="error-messages">
              {error.email && <li>email {error.email}</li>}
              {error.password && <li>password {error.password}</li>}
              {error.emailOrPassword && (
                <li>email or password {error.emailOrPassword}</li>
              )}
            </ul>

            <form onSubmit={onSubmitForm}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
