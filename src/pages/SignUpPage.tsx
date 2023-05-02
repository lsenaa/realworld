import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../apis/users/users";
import { useIsLogin } from "../hooks/useIsLogin";

interface IFormRegisterData {
  email: string;
  username: string;
  password: string;
}

const SignUpPage = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useIsLogin();

  const [values, setValues] = useState<IFormRegisterData>({
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postRegister(values)
      .then((res) => {
        localStorage.setToken("accessToken", res.data.user.token);
        // setIsLogin(localStorage.getToken("accessToken"));
        setIsLogin(false);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setError({
          email: err.response.data.errors.email,
          username: err.response.data.errors.username,
          password: err.response.data.errors.password,
        });
      });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ul className="error-messages">
              {error.email && <li>email {error.email}</li>}
              {error.username && <li>username {error.username}</li>}
              {error.password && <li>password {error.password}</li>}
            </ul>

            <form onSubmit={onSubmitRegister}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </fieldset>
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
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
